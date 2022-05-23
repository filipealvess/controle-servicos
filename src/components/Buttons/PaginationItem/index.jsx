import React from 'react';
import Container from './styles';

export default function PaginationItem({ page, isActive, onChange = () => {} }) {
  return (
    <Container type="button" isActive={isActive} onClick={() => onChange(page)}>
      {page}
    </Container>
  );
}
