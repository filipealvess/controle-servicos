import React from 'react';
import Container from './styles';

export default function Form({ children, onSubmit = () => {} }) {
  return (
    <Container onSubmit={onSubmit}>
      {children}
    </Container>
  );
}
