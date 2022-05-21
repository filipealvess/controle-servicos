import React, { useState } from 'react';
import { Download } from 'react-feather';
import Container, { Description, Title } from './styles';

export default function ImportSection() {
  const [isActive, setIsActive] = useState(false);

  return (
    <Container
      isActive={isActive}
      onDragOver={() => setIsActive(true)}
      onDragLeave={() => setIsActive(false)}
    >
      <Download size={64} />
      <Title>Importe os dados de prestadores e serviços</Title>
      <Description>Selecione um arquivo CSV do seu computador</Description>

      <input type="file" hidden />
    </Container>
  );
}
