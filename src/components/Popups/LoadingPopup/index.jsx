import React from 'react';
import { Loader } from 'react-feather';
import theme from '../../../styles/theme';
import Container, { Content, Text } from './styles';

export default function LoadingPopup({ isVisible }) {
  return (
    <Container isVisible={isVisible}>
      <Content>
        <Loader color={theme.primary} strokeWidth={3} />
        <Text>Carregando...</Text>
      </Content>
    </Container>
  );
}
