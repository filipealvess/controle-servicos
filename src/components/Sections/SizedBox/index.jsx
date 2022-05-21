import React from 'react';
import Container from './styles';

export default function SizedBox({ width = 0, height = 0 }) {
  return (
    <Container width={width} height={height} />
  );
}
