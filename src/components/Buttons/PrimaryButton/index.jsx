import React from 'react';
import Container from './styles';

export default function PrimaryButton({
  text,
  type = 'submit',
  disabled = false
}) {
  return (
    <Container type={type} disabled={disabled}>
      {text}
    </Container>
  );
}
