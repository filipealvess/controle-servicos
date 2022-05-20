import React from 'react';
import Header from '../../components/Header';
import Field from '../../components/Field';
import Tabs from '../../components/Tabs';
import Container, { Form } from './styles';

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
      </Form>
    </Container>
  );
}
