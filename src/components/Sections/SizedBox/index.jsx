import React from 'react';
import Container from './styles';

export default function SizedBox({ width, height, maxWidth, children, auto }) {
  return (
    <Container
      width={width}
      height={height}
      maxWidth={maxWidth}
      auto={auto}
    >{children}</Container>
  );
}
