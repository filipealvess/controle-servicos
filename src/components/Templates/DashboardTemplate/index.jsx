import React from 'react';
import { LogOut } from 'react-feather';
import dashboardLinks from '../../../static/dashboardLinks';
import Expanded from '../../Sections/Expanded';
import PageLink from '../../Links/PageLink';
import Container, { Divider, Image, Links, Logo, Main, Menu, Title } from './styles';
import { useAuth } from '../../../context/AuthContext';

export default function DashboardTemplate({ children, currentPage }) {
  const { logout } = useAuth();

  return (
    <Container>
      <Menu>
        <Logo>
          <Image
            src="/images/logo.svg"
            alt="Logo do Controle de Serviços: chave no centro de um círculo."
            width={40}
            height={40}
          />

          <Title>Controle <br /> de Serviços</Title>
        </Logo>

        <Divider />

        <Links>
          {dashboardLinks.map(({ icon, id, page, title, route }) => (
            <PageLink
              key={id}
              icon={icon}
              title={title}
              isActive={currentPage === page}
              route={route}
            />
          ))}

          <Expanded />

          <PageLink
            icon={<LogOut size={18} />}
            title="Sair"
            route="/"
            onClick={logout}
          />
        </Links>
      </Menu>

      <Main>{children}</Main>
    </Container>
  );
}
