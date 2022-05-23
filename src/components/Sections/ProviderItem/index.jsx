import React from 'react';
import Container, { Avatar, Content, Name, Services } from './styles';

export default function ProviderItem({ provider, onClick = () => {} }) {
  return (
    <Container onClick={() => onClick(provider)}>
      <Avatar src={provider.avatar} alt="Rosto do prestador de serviços" />

      <Content>
        <Name>{provider.name}</Name>
        <Services>{provider.services.join(', ')}</Services>
      </Content>
    </Container>
  );
}
