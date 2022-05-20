import styled from 'styled-components';
import { css } from 'styled-components';

const Container = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px;
  margin: 3rem auto;
`;

export const Tab = styled.button`
  width: 50%;
  padding: 10px;
  background-color: ${({ theme }) => theme.lightGrey};
  color: rgba(0, 0, 0, 0.6);
  font-weight: 600;

  &:first-child { border-radius: 8px 0 0 8px; }

  &:last-child { border-radius: 0 8px 8px 0; }

  ${({ active, theme }) => active && css`
    background-color: ${theme.secondary};
    color: #181818;
    cursor: default;
  `}
`;

export default Container;
