import React, { useState } from 'react';
import { Search as SearchIcon } from 'react-feather';
import Container, { Button, Input } from './styles';

export default function SearchBar({ onSearch = () => {} }) {
  const [search, setSearch] = useState('');

  function handleFormSubmit(event) {
    event.preventDefault();
    onSearch(search);
  }

  return (
    <Container onSubmit={handleFormSubmit}>
      <Input
        placeholder="Pesquisar"
        value={search}
        onChange={({ target }) => setSearch(target.value)}
      />

      <Button>
        <SearchIcon size={18} color="#FFFFFF" />
      </Button>
    </Container>
  );
}
