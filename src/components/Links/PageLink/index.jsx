import React from 'react';
import Container, { Content, Text } from './styles';

export default function PageLink({
  icon,
  title,
  route,
  isActive = false,
  onClick
}) {
  function handleClick() {
    if (onClick) {
      onClick();
    }
  }

  return (
    <Container isActive={isActive} onClick={handleClick}>
      <Content to={route}>
        {icon}
        <Text>{title}</Text>
      </Content>
    </Container>
  );
}
