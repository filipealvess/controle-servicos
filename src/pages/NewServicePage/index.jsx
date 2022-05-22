import React from 'react';
import DashboardHeader from '../../components/Sections/DashboardHeader';
import DashboardTemplate from '../../components/Templates/DashboardTemplate';
import Form from '../../components/Sections/Form';
import Field from '../../components/Inputs/Field';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import SizedBox from '../../components/Sections/SizedBox';
import Multilines from '../../components/Inputs/Multilines';

export default function NewServicePage() {
  return (
    <DashboardTemplate currentPage="services">
      <DashboardHeader
        title="Novo Serviço"
        route="/servicos"
        hasCancelButton
      />

      <Form>
        <Field label="Nome" placeholder="Nome do serviço" required />
        <Multilines label="Descrição" placeholder="Descrição do serviço" required />
        <Field
          label="Preço padrão"
          placeholder="R$ 0,00"
          type="number"
          tip="Poderá ser alterado para cada prestador posteriormente."
          required
        />
        <SizedBox height={40} />
        <PrimaryButton text="Salvar" />
      </Form>
    </DashboardTemplate>
  );
}
