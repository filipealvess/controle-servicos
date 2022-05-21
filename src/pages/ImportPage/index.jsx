import React from 'react';
import DashboardHeader from '../../components/Sections/DashboardHeader';
import DashboardTemplate from '../../components/Templates/DashboardTemplate';
import ImportSection from '../../components/Sections/ImportSection';
import Tip from '../../components/Texts/Tip';
import SizedBox from '../../components/Sections/SizedBox';

export default function ImportPage() {
  return (
    <DashboardTemplate currentPage="import">
      <DashboardHeader title="Importação" hasActions={false} />

      <ImportSection />
      <SizedBox height={20} />
      <Tip text="O arquivo CSV deve conter os dados solicitados no cadastro de prestadores e serviços." />
    </DashboardTemplate>
  );
}
