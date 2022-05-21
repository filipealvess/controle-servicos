import styled from 'styled-components';

const Container = styled.button`
  width: 100%;
  padding: 10px 15px;
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 8px;
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
  text-transform: uppercase;
  transition-duration: 0.3s;
  transition-property: border-color, color;

  &:hover {
    border-color: #272A45;
    color: #272A45;
  }
`;

export default Container;
