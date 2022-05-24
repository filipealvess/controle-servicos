import React, { useState } from 'react';
import DashboardHeader from '../../components/Sections/DashboardHeader';
import DashboardTemplate from '../../components/Templates/DashboardTemplate';
import ImportSection from '../../components/Sections/ImportSection';
import Tip from '../../components/Texts/Tip';
import SizedBox from '../../components/Sections/SizedBox';
import Papa from 'papaparse';
import { useAuth } from '../../context/AuthContext';
import { createService } from '../../controllers/serviceController';
import { createProvider } from '../../controllers/providerController';
import AlertPopup from '../../components/Popups/AlertPopup';
import { useNavigate } from 'react-router-dom';
import LoadingPopup from '../../components/Popups/LoadingPopup';

export default function ImportPage() {
  const [loadingIsVisible, setLoadingIsVisible] = useState(false);
  const [popupIsVisible, setPopupIsVisible] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();
  const structure = ['image_path', 'provider_name', 'phone', 'email', 'service', 'description', 'price'];

  async function saveData(providers, services) {
    for(let i = 0; i < providers.length; i++) {
      const { userID, description, defaultPrice } = services[i];
      const { imagePath, phone, email } = providers[i];

      const data = await createService(userID, services[i].name, description, defaultPrice);
      await createProvider(userID, imagePath, providers[i].name, phone, email, [{ id: data.id, price: defaultPrice }]);
    }

    sessionStorage.setItem('data-was-imported', JSON.stringify(true));
    navigate('/prestadores');
  }

  function handleCsvParse(results) {
    const columns = results.data[0];
    let structureIsCorrect = true;

    structure.forEach(column => {
      if (!columns.includes(column)) {
        structureIsCorrect = false;
      }
    });

    if (structureIsCorrect) {
      setLoadingIsVisible(true);

      const { providers, services } = results.data.reduce((finalData, result, index) => {
        if (index === 0) {
          return finalData;
        } else {
          return {
            providers: [
              ...finalData.providers,
              { userID: user.id, imagePath: result[0], name: result[1], phone: result[2], email: result[3], }
            ],
            services: [
              ...finalData.services,
              { userID: user.id, name: result[4], description: result[5], defaultPrice: result[6], }
            ],
          }
        }
      }, { providers: [], services: [] });

      saveData(providers, services);
    } else {
      setPopupIsVisible(true);
    }
  }

  function handleUpload(event) {
    Papa.parse(event.target.files[0], {
      complete: handleCsvParse,
      error: () => setPopupIsVisible(true)
    });
  }

  return (
    <DashboardTemplate currentPage="import">
      <DashboardHeader title="Importação" hasActions={false} />

      <ImportSection onUpload={handleUpload} />
      <SizedBox height={20} />
      <Tip text="O arquivo CSV deve conter os dados solicitados no cadastro de prestadores e serviços." />

      <AlertPopup
        title="Erro na importação"
        description="Não foi possível importar o arquivo, verifique os dados solicitados e tente novamente"
        isVisible={popupIsVisible}
        onClose={() => setPopupIsVisible(false)}
      />

      <LoadingPopup isVisible={loadingIsVisible} />
    </DashboardTemplate>
  );
}
