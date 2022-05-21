import React from 'react';
import DashboardHeader from '../../components/Sections/DashboardHeader';
import DashboardTemplate from '../../components/Templates/DashboardTemplate';
import EmptySection from '../../components/Sections/EmptySection';

export default function ProvidersPage() {
  return (
    <DashboardTemplate currentPage="providers">
      <DashboardHeader title="Prestadores de Serviço" route="/prestadores/novo" />

      <EmptySection
        title="Nenhum prestador cadastrado"
        description="Para cadastrar seu primeiro prestador, clique no botão NOVO."
      />
    </DashboardTemplate>
  );
}
