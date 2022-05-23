import React from 'react';
import { XCircle } from 'react-feather';
import Container, { Button, Text } from './styles';

export default function SearchResult({ onClear = () => {} }) {
  return (
    <Container>
      <Text>Resultado da busca:</Text>
      <Button type="button" onClick={onClear}>
        <XCircle size={14} /> Limpar busca
      </Button>
    </Container>
  );
}
