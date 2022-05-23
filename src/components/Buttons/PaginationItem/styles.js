import styled, { css } from 'styled-components';

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.primary};
  color: #FFFFFF;
  font-size: 1.6rem;
  font-weight: 600;
  opacity: 0.5;
  transition: 0.3s background-color;

  &:hover { background-color: #272A45; }

  & ~ & { margin-left: 10px; }

  ${({ isActive }) => isActive && css`opacity: 1;`}
`;

export default Container;
