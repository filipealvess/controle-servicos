import styled from 'styled-components';

const Container = styled.form`
  display: flex;
  align-items: stretch;
  width: 35%;
`;

export const Input = styled.input`
  min-width: 0;
  flex-grow: 1;
  padding: 7px 15px;
  border: 1px solid ${({ theme }) => theme.mediumGrey};
  border-radius: 8px 0 0 8px;
  transition: 0.3s border-color;

  &:focus { border-color: #000000; }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 0 8px 8px 0;
  background-color: ${({ theme }) => theme.primary};
  transition: 0.3s background-color;

  &:hover {
    background-color: #272A45;
  }
`;

export default Container;
