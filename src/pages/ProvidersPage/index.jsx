import React, { useEffect, useState } from 'react';
import DashboardHeader from '../../components/Sections/DashboardHeader';
import DashboardTemplate from '../../components/Templates/DashboardTemplate';
import EmptySection from '../../components/Sections/EmptySection';
import AlertPopup from '../../components/Popups/AlertPopup';
import { listProviders } from '../../controllers/providerController';
import { useAuth } from '../../context/AuthContext';
import ProvidersGrid from '../../components/Sections/ProvidersGrid';
import Pagination from '../../components/Sections/Pagination';
import SearchResult from '../../components/Links/SearchResult';

export default function ProvidersPage() {
  const [errorPopupIsVisible, setErrorPopupIsVisible] = useState(false);
  const [infoPopupIsVisible, setInfoPopupIsVisible] = useState(false);
  const [providers, setProviders] = useState([]);
  const [pagesNumber, setPagesNumber] = useState(null);
  const [currentPageNumber, setCurrentPageNumber] = useState(null);
  const [search, setSearch] = useState('');
  const { user } = useAuth();

  useEffect(() => {
    const state = JSON.parse(sessionStorage.getItem('one-provider-was-created'));

    state && setInfoPopupIsVisible(true);
    sessionStorage.removeItem('one-provider-was-created');
  }, []);

  useEffect(() => {
    user && fetchProviders();
  }, [user]);

  async function fetchProviders(page = 1, search = '') {
    const response = await listProviders(user.id, page, search);

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

  function handleSearch(searchText) {
    const defaultPage = 1;

    setSearch(searchText);
    fetchProviders(defaultPage, searchText);
  }

  function clearSearch() {
    setSearch('');
    fetchProviders();
  }

  return (
    <DashboardTemplate currentPage="providers">
      <DashboardHeader
        title="Prestadores de Serviço"
        route="/prestadores/novo"
        onSearch={handleSearch}
      />

      {providers.length > 0 && (
        <Pagination
          currentPage={currentPageNumber}
          pages={pagesNumber}
          onChange={handlePageChange}
        />
      )}

      {search.length > 0 && <SearchResult onClear={clearSearch} />}

      {providers.length === 0 && search.length === 0 && (
        <EmptySection
          title="Nenhum prestador cadastrado"
          description="Para cadastrar seu primeiro prestador, clique no botão NOVO."
        />
      )}

      {providers.length > 0 && providers.filter(({ isVisible }) => isVisible).length === 0 && (
        <EmptySection
          title="Nenhum serviço encontrado"
          description="Não foi possível encontrar serviços com a busca realizada"
        />
      )}

      <ProvidersGrid providers={providers} />

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
