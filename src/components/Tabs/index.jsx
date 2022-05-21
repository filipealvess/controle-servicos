import React from 'react';
import { useNavigate } from 'react-router-dom';
import { tabs } from '../../static/tabs';
import Container, { Tab } from './styles';

export default function Tabs({ currentPage = 'login' }) {
  const navigate = useNavigate();

  function handleTabClick(page, route) {
    if (currentPage !== page) {
      navigate(route);
    }
  }

  return (
    <Container>
      {
        tabs.map(({ id, page, name, route }) => (
          <Tab
            key={id}
            active={currentPage === page}
            onClick={() => handleTabClick(page, route)}
          >{name}</Tab>
        ))
      }
    </Container>
  );
}
