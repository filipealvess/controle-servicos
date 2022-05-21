import React from 'react';
import SearchBar from '../../Inputs/SearchBar';
import SizedBox from '../../Sections/SizedBox';
import NewButton from '../../Buttons/NewButton';
import Container, { Title } from './styles';
import { useNavigate } from 'react-router-dom';
import SecondaryButton from '../../Buttons/SecondaryButton';

export default function DashboardHeader({ title, route, hasCancelButton = false }) {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>{title}</Title>

      {hasCancelButton
        ? <SecondaryButton text="Cancelar" onClick={() => navigate(route)} />
        : <>
            <SearchBar />
            <SizedBox width={10} />
            <NewButton onClick={() => navigate(route)} />
          </>}
    </Container>
  );
}
