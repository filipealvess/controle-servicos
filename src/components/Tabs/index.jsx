import React from 'react';
import Container, { Tab } from './styles';

export default function Tabs({ currentPage = 'login' }) {
  return (
    <Container>
      <Tab active={currentPage === 'login'}>
        Entrar
      </Tab>

      <Tab active={currentPage === 'signup'}>
        Criar Conta
      </Tab>
    </Container>
  );
}
