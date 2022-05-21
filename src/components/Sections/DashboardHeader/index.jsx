import React from 'react';
import SearchBar from '../../Inputs/SearchBar';
import SizedBox from '../../Sections/SizedBox';
import NewButton from '../../Buttons/NewButton';
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
