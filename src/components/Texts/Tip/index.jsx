import React from 'react';
import { Info } from 'react-feather';
import Container, { Text } from './styles';
import theme from '../../../styles/theme';

export default function Tip({ text }) {
  return (
    <Container>
      <Info size={16} strokeWidth={3} color={theme.darkGrey} />
      <Text>{text}</Text>
    </Container>
  );
}
