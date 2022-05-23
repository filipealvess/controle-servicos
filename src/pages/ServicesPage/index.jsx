import React, { useEffect, useState } from 'react';
import DashboardHeader from '../../components/Sections/DashboardHeader';
import DashboardTemplate from '../../components/Templates/DashboardTemplate';
import EmptySection from '../../components/Sections/EmptySection';
import { listServices } from '../../controllers/serviceController';
import { useAuth } from '../../context/AuthContext';
import AlertPopup from '../../components/Popups/AlertPopup';
import ServicesGrid from '../../components/Sections/ServicesGrid';
import SearchResult from '../../components/Links/SearchResult';

export default function ServicesPage() {
  const [errorPopupIsVisible, setErrorPopupIsVisible] = useState(false);
  const [infoPopupIsVisible, setInfoPopupIsVisible] = useState(false);
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState('');
  const { user } = useAuth();

  useEffect(() => {
    const state = JSON.parse(sessionStorage.getItem('one-service-was-created'));

    state && setInfoPopupIsVisible(true);
    sessionStorage.removeItem('one-service-was-created');
  }, []);

  useEffect(() => {
    async function fetch() {
      const data = await listServices(user.id);

      data
        ? setServices(data.map(service => ({ ...service, isVisible: true })))
        : setErrorPopupIsVisible(true);
    }

    fetch();
  }, [user]);

  function handleSearch(searchText) {
    setSearch(searchText);
    setServices(services.map(service => {
      const serviceName = service.name.toLowerCase();
      const matchedSearch = serviceName.includes(searchText.toLowerCase());
      const newValues = { ...service, isVisible: false };

      return matchedSearch ? { ...service, isVisible: true } : newValues;
    }));
  }

  function clearSearch() {
    setSearch('');
    setServices(services.map(service => ({ ...service, isVisible: true })));
  }

  return (
    <DashboardTemplate currentPage="services">
      <DashboardHeader
        title="Serviços"
        route="/servicos/novo"
        onSearch={handleSearch}
      />

      {search.length > 0 && <SearchResult onClear={clearSearch} />}

      <ServicesGrid services={services} />

      {services.length === 0 && search.length === 0 && (
        <EmptySection
          title="Nenhum serviço cadastrado"
          description="Para cadastrar seu primeiro serviço, clique no botão NOVO."
        />
      )}

      {services.length > 0 && services.filter(({ isVisible }) => isVisible).length === 0 && (
        <EmptySection
          title="Nenhum serviço encontrado"
          description="Não foi possível encontrar serviços com a busca realizada"
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
