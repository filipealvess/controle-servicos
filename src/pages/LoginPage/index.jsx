import React from 'react';
import Header from '../../components/Header';
import Field from '../../components/Field';
import Tabs from '../../components/Tabs';
import Container, { Form } from './styles';
import PrimaryButton from '../../components/PrimaryButton';
import SizedBox from '../../components/SizedBox';

export default function LoginPage() {
  return (
    <Container>
      <Header />
      <Tabs />

      <Form>
        <Field
          label="E-mail"
          placeholder="Seu e-mail"
          type="email"
        />

        <Field
          label="Senha"
          placeholder="******"
          type="password"
        />

        <SizedBox height={40} />

        <PrimaryButton text="Entrar" />
      </Form>
    </Container>
  );
}
