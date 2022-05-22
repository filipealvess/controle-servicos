import React from 'react';
import { X } from 'react-feather';
import IconButton from '../../Buttons/IconButton';
import Container, { Description, Header, Title } from './styles';

export default function AlertPopup({ title, description, isVisible = false }) {
  return (
    <Container isVisible={isVisible}>
      <Header>
        <Title>{title}</Title>
        <IconButton><X size={18} color="#FFFFFF" /></IconButton>
      </Header>

      <Description>{description}</Description>
    </Container>
  );
}
