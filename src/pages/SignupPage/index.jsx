import React from 'react';
import Field from '../../components/Inputs/Field';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import SizedBox from '../../components/Sections/SizedBox';
import AuthPageTemplate from '../../components/Templates/AuthPageTemplate';

export default function SignupPage() {
  return (
    <AuthPageTemplate currentPage="signup">
      <Field label="Nome" placeholder="Seu nome" />
      <Field label="E-mail" placeholder="Seu e-mail" type="email" />
      <Field label="Senha" placeholder="******" type="password" />
      <SizedBox height={40} />
      <PrimaryButton text="Criar Conta" />
    </AuthPageTemplate>
  );
}
