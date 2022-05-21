import React from 'react';
import Container, { Description, Title } from './styles';

export default function EmptySection({ title, description }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
}
