import React from 'react';
import { Search as SearchIcon } from 'react-feather';
import Container, { Button, Input } from './styles';

export default function SearchBar() {
  return (
    <Container>
      <Input placeholder="Pesquisar" />
      <Button type="button">
        <SearchIcon size={18} color="#FFFFFF" />
      </Button>
    </Container>
  );
}
