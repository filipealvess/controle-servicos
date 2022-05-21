import React from 'react';
import Container from './styles';

export default function PrimaryButton({ text }) {
  return (
    <Container type="button">
      {text}
    </Container>
  );
}
