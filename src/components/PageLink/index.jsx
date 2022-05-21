import React from 'react';
import Container, { Content, Text } from './styles';

export default function PageLink({ icon, title, route, isActive = false }) {
  return (
    <Container isActive={isActive}>
      <Content href={route}>
        {icon}
        <Text>{title}</Text>
      </Content>
    </Container>
  );
}
