import React from 'react';
import Container from './styles';

export default function IconButton({ children, onClick = () => {} }) {
  return (
    <Container type="button" onClick={onClick}>
      {children}
    </Container>
  );
}
