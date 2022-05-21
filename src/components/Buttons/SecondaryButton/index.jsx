import React from 'react';
import Container from './styles';

export default function SecondaryButton({ text, onClick = () => {} }) {
  return (
    <Container type="button" onClick={onClick}>
      {text}
    </Container>
  );
}
