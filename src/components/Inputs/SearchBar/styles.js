import styled from 'styled-components';

const Container = styled.article`
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
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 0 8px 8px 0;
  background-color: ${({ theme }) => theme.primary};
`;

export default Container;
