import React from 'react';
import ServiceItem from '../ServiceItem';
import Container from './styles';

export default function ServicesGrid({ services }) {
  return (
    <Container>
      {services.map(service => <ServiceItem key={service.id} service={service} />)}
    </Container>
  );
}
