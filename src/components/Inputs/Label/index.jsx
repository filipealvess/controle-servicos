import React from 'react';
import Tip from '../../Texts/Tip';
import Container, { Text } from './styles';

export default function Label({ text, tip, children }) {
  return (
    <Container>
      <Text>{text}:</Text>

      {tip && <Tip text={tip} />}

      {children}
    </Container>
  );
}
