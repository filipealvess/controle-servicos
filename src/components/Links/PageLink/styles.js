import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { css } from 'styled-components';

const Container = styled.li`
  border-radius: 8px;
  background-color: transparent;
  transition: 0.3s background-color;

  & ~ & { margin-top: 10px; }

  &:hover { background-color: #494C67; }

  ${({ isActive }) => isActive && css`
    background-color: #50536E;

    &:hover { background-color: #50536E; }

    & ${Text} { font-weight: 600; }
  `};

  @media (max-width: 850px) {
    flex-grow: 1;
    margin-top: 0;

    & ~ & { margin-top: 0; margin-left: 10px; }
  }
`;

export const Content = styled(Link)`
  display: flex;
  align-items: center;
  padding: 10px;
  color: ${({ theme }) => theme.secondary};

  @media (max-width: 850px) {
    justify-content: center;
  }

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const Text = styled.p`
  margin-left: 10px;
  color: #FFFFFF;
  font-size: 1.6rem;
  font-weight: 500;

  @media (max-width: 700px) {
    margin-top: 5px;
    margin-left: 0;
    font-size: 1.2rem;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

export default Container;
