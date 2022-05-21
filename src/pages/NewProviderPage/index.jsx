import React from 'react';
import DashboardHeader from '../../components/Sections/DashboardHeader';
import DashboardTemplate from '../../components/Templates/DashboardTemplate';

export default function NewProviderPage() {
  return (
    <DashboardTemplate currentPage="providers">
      <DashboardHeader
        title="Novo Prestador"
        route="/prestadores"
        hasCancelButton
      />
    </DashboardTemplate>
  );
}
