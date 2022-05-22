import React from 'react';
import Field from '../../components/Inputs/Field';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import SizedBox from '../../components/Sections/SizedBox';
import AuthPageTemplate from '../../components/Templates/AuthPageTemplate';

export default function LoginPage() {
  return (
    <AuthPageTemplate>
      <Field label="E-mail" placeholder="Seu e-mail" type="email" required />
      <Field label="Senha" placeholder="******" type="password" required />
      <SizedBox height={40} />
      <PrimaryButton text="Entrar" />
    </AuthPageTemplate>
  );
}
