import React from 'react';
import { Info } from 'react-feather';
import Container, { Text, Tip } from './styles';

export default function Label({ text, tip, children }) {
  return (
    <Container>
      <Text>{text}</Text>

      {tip && (
        <Tip><Info size={14} strokeWidth={3} /> {tip}</Tip>
      )}

      {children}
    </Container>
  );
}
