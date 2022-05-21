import React from 'react';
import Container from './styles';

export default function NewButton({ onClick = () => {} }) {
  return (
    <Container type="button" onClick={onClick}>
      + Novo
    </Container>
  );
}
