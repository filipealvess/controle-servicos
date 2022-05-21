import React from 'react';
import Field from '../../components/Field';
import PrimaryButton from '../../components/PrimaryButton';
import SizedBox from '../../components/SizedBox';
import AuthPageTemplate from '../../components/AuthPageTemplate';

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
