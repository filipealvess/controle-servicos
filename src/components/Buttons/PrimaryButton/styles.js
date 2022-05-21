import styled from 'styled-components';

const Container = styled.button`
  width: 100%;
  padding: 10px 15px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.primary};
  color: #FFFFFF;
  font-weight: 600;
  text-transform: uppercase;
  transition: 0.3s background-color;

  &:hover {
    background-color: #272A45;
  }
`;

export default Container;
