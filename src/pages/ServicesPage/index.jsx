import React from 'react';
import DashboardHeader from '../../components/Sections/DashboardHeader';
import DashboardTemplate from '../../components/Templates/DashboardTemplate';
import EmptySection from '../../components/Sections/EmptySection';

export default function ServicesPage() {
  return (
    <DashboardTemplate currentPage="services">
      <DashboardHeader title="Serviços" route="/servicos/novo" />

      <EmptySection
        title="Nenhum serviço cadastrado"
        description="Para cadastrar seu primeiro serviço, clique no botão NOVO."
      />
    </DashboardTemplate>
  );
}
