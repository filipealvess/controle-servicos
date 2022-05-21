import React from 'react';
import DashboardHeader from '../../components/DashboardHeader';
import DashboardTemplate from '../../components/DashboardTemplate';
import EmptySection from '../../components/EmptySection';

export default function ProvidersPage() {
  return (
    <DashboardTemplate currentPage="providers">
      <DashboardHeader title="Prestadores de Serviço" />

      <EmptySection
        title="Nenhum prestador cadastrado"
        description="Para cadastrar seu primeiro prestador, clique no botão NOVO."
      />
    </DashboardTemplate>
  );
}
