import React from 'react';
import Container from './styles';

export default function PrimaryButton({ text, type = 'submit' }) {
  return (
    <Container type={type}>
      {text}
    </Container>
  );
}
