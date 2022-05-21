import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Text = styled.p`
  flex: 1;
  margin-left: 5px;
  color: ${({ theme }) => theme.darkGrey};
  font-size: 1.4rem;
  font-weight: 500;
`;

export default Container;
