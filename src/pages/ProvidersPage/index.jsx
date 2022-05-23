import React, { useEffect, useState } from 'react';
import DashboardHeader from '../../components/Sections/DashboardHeader';
import DashboardTemplate from '../../components/Templates/DashboardTemplate';
import EmptySection from '../../components/Sections/EmptySection';
import AlertPopup from '../../components/Popups/AlertPopup';
import { listProviders } from '../../controllers/providerController';
import { useAuth } from '../../context/AuthContext';
import ProvidersGrid from '../../components/Sections/ProvidersGrid';

export default function ProvidersPage() {
  const [errorPopupIsVisible, setErrorPopupIsVisible] = useState(false);
  const [infoPopupIsVisible, setInfoPopupIsVisible] = useState(false);
  const [providers, setProviders] = useState([]);
  const [pagesNumber, setPagesNumber] = useState(null);
  const [currentPageNumber, setCurrentPageNumber] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    const state = JSON.parse(sessionStorage.getItem('one-provider-was-created'));

    state && setInfoPopupIsVisible(true);
    sessionStorage.removeItem('one-provider-was-created');
  }, []);

  useEffect(() => {
    user && fetchProviders();
  }, [user]);

  async function fetchProviders(page = 1) {
    const response = await listProviders(user.id, page);

    if (response) {
      const { pages, currentPage, data } = response;

      setCurrentPageNumber(currentPage);
      setPagesNumber(pages);
      setProviders(data.map(provider => ({ ...provider, isVisible: true })));
    } else {
      setErrorPopupIsVisible(true);
    }
  }

  function handlePageChange(page) {
    if (page !== currentPageNumber) {
      fetchProviders(page);
    }
  }

  return (
    <DashboardTemplate currentPage="providers">
      <DashboardHeader title="Prestadores de Serviço" route="/prestadores/novo" />

      {providers.length === 0 && (
        <EmptySection
          title="Nenhum prestador cadastrado"
          description="Para cadastrar seu primeiro prestador, clique no botão NOVO."
        />
      )}

      <ProvidersGrid
        providers={providers}
        currentPage={currentPageNumber}
        pages={pagesNumber}
        onChangePage={handlePageChange}
      />

      <AlertPopup
        title="Erro na listagem"
        description="Não foi possível obter os prestadores cadastrados, regarregue a página para tentar novamente"
        isVisible={errorPopupIsVisible}
        onClose={() => setErrorPopupIsVisible(false)}
      />

      <AlertPopup
        title="Prestador cadastrado"
        description="O prestador de serviços foi cadastrado e já está na lista"
        isVisible={infoPopupIsVisible}
        onClose={() => setInfoPopupIsVisible(false)}
      />
    </DashboardTemplate>
  );
}
