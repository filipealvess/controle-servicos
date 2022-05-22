import React from 'react';
import DashboardHeader from '../../components/Sections/DashboardHeader';
import DashboardTemplate from '../../components/Templates/DashboardTemplate';
import AvatarImageUpload from '../../components/Buttons/AvatarImageUpload';
import Field from '../../components/Inputs/Field';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import ServicesList from '../../components/Sections/ServicesList';
import SizedBox from '../../components/Sections/SizedBox';

export default function NewProviderPage() {
  return (
    <DashboardTemplate currentPage="providers">
      <DashboardHeader
        title="Novo Prestador"
        route="/prestadores"
        hasCancelButton
      />

      <SizedBox maxWidth={500} auto>
        <AvatarImageUpload />
        <Field label="Nome" placeholder="Nome do prestador" required />
        <Field label="Telefone" placeholder="(00) 0000-0000" type="tel" required />
        <Field label="E-mail" placeholder="E-mail do prestador" type="email" required />
        <ServicesList />
        <SizedBox height={40} />
        <PrimaryButton text="Salvar" />
      </SizedBox>
    </DashboardTemplate>
  );
}
