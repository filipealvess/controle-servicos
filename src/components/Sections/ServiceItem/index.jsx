import React from 'react';
import { formatPrice } from '../../../controllers/serviceController';
import Container, { Description, Header, Price, Title } from './styles';

export default function ServiceItem({ service }) {
  return (
    <Container isVisible={service.isVisible}>
      <Header>
        <Title>{service.name}</Title>
        <Price>{formatPrice(`${service.default_price}`)}</Price>
      </Header>

      <Description>{service.description}</Description>
    </Container>
  );
}
