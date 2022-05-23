import React, { useEffect, useState } from 'react';
import DashboardHeader from '../../components/Sections/DashboardHeader';
import DashboardTemplate from '../../components/Templates/DashboardTemplate';
import EmptySection from '../../components/Sections/EmptySection';
import { listServices } from '../../controllers/serviceController';
import { useAuth } from '../../context/AuthContext';
import AlertPopup from '../../components/Popups/AlertPopup';
import ServicesGrid from '../../components/Sections/ServicesGrid';

export default function ServicesPage() {
  const [errorPopupIsVisible, setErrorPopupIsVisible] = useState(false);
  const [infoPopupIsVisible, setInfoPopupIsVisible] = useState(false);
  const [services, setServices] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const state = JSON.parse(sessionStorage.getItem('one-service-was-created'));

    state && setInfoPopupIsVisible(true);
    sessionStorage.removeItem('one-service-was-created');
  }, []);

  useEffect(() => {
    async function fetch() {
      const data = await listServices(user.id);

      data ? setServices(data) : setErrorPopupIsVisible(true);
    }

    fetch();
  }, [user]);

  return (
    <DashboardTemplate currentPage="services">
      <DashboardHeader title="Serviços" route="/servicos/novo" />

      <ServicesGrid services={services} />

      {services.length === 0 && (
        <EmptySection
          title="Nenhum serviço cadastrado"
          description="Para cadastrar seu primeiro serviço, clique no botão NOVO."
        />
      )}

      <AlertPopup
        title="Erro na listagem"
        description="Não foi possível obter os serviços cadastrados, regarregue a página para tentar novamente"
        isVisible={errorPopupIsVisible}
        onClose={() => setErrorPopupIsVisible(false)}
      />

      <AlertPopup
        title="Serviço cadastrado"
        description="O serviço foi cadastrado e já está na lista"
        isVisible={infoPopupIsVisible}
        onClose={() => setInfoPopupIsVisible(false)}
      />
    </DashboardTemplate>
  );
}
