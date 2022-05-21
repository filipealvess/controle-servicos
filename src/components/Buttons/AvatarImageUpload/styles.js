import styled from 'styled-components';

const Container = styled.label`
  display: block;
  width: 70px;
  height: 70px;
  margin: 0 auto 2rem;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.primary};
`;

export default Container;
