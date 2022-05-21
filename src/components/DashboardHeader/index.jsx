import React from 'react';
import SearchBar from '../SearchBar';
import SizedBox from '../SizedBox';
import NewButton from '../NewButton';
import Container, { Title } from './styles';

export default function DashboardHeader({ title }) {
  return (
    <Container>
      <Title>{title}</Title>
      <SearchBar />
      <SizedBox width={10} />
      <NewButton />
    </Container>
  );
}
