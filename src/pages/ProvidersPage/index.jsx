import React from 'react';
import DashboardHeader from '../../components/DashboardHeader';
import DashboardTemplate from '../../components/DashboardTemplate';

export default function ProvidersPage() {
  return (
    <DashboardTemplate currentPage="providers">
      <DashboardHeader title="Prestadores de Serviço" />
    </DashboardTemplate>
  );
}
