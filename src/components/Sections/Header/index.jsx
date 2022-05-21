import React from 'react';
import Container, { Logo, Title } from './styles';

export default function Header() {
  return (
    <Container>
      <Logo
        src="/images/logo.svg"
        alt="Logo do Controle de Serviços: chave no centro de um círculo."
        width={60}
        height={60}
      />

      <Title>Controle de Serviços</Title>
    </Container>
  );
}
