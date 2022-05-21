import React from 'react';
import { Download } from 'react-feather';
import Container, { Description, Title } from './styles';

export default function ImportSection() {
  return (
    <Container>
      <Download size={64} />
      <Title>Importe os dados de prestadores e serviços</Title>
      <Description>Selecione um arquivo CSV do seu computador</Description>

      <input type="file" hidden />
    </Container>
  );
}
