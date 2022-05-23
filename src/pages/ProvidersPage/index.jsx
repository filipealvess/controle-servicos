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
import ProviderPopup from '../../components/Popups/ProviderPopup';

export default function ProvidersPage() {
  const [providerPopupIsVisible, setProviderPopupIsVisible] = useState(false);
  const [errorPopupIsVisible, setErrorPopupIsVisible] = useState(false);
  const [infoPopupIsVisible, setInfoPopupIsVisible] = useState(false);
  const [importPopupIsVisible, setImportPopupIsVisible] = useState(false);
  const [providers, setProviders] = useState([]);
  const [pagesNumber, setPagesNumber] = useState(null);
  const [currentPageNumber, setCurrentPageNumber] = useState(null);
  const [search, setSearch] = useState('');
  const [selectedProvider, setSelectedProvider] = useState({});
  const { user } = useAuth();

  useEffect(() => {
    const providerWasCreated = JSON.parse(sessionStorage.getItem('one-provider-was-created'));
    const dataImported = JSON.parse(sessionStorage.getItem('data-was-imported'));

    if (providerWasCreated) {
      setInfoPopupIsVisible(true);
      sessionStorage.removeItem('one-provider-was-created');
    }
    
    if (dataImported) {
      setImportPopupIsVisible(true);
      sessionStorage.removeItem('data-was-imported');
    }
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

  function handleProviderClick(provider) {
    setSelectedProvider(provider);
    setProviderPopupIsVisible(true);
  }

  function handleProviderPopupClose() {
    setProviderPopupIsVisible(false);
    setSelectedProvider(null);
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

      <ProvidersGrid providers={providers} onClick={handleProviderClick} />

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

      <AlertPopup
        title="Importação realizada"
        description="Os dados foram importados e já estão na lista"
        isVisible={importPopupIsVisible}
        onClose={() => setImportPopupIsVisible(false)}
      />

      <ProviderPopup
        provider={selectedProvider}
        isVisible={providerPopupIsVisible}
        onClose={handleProviderPopupClose}
      />
    </DashboardTemplate>
  );
}
