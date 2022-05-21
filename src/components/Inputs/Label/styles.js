import styled from 'styled-components';

const Container = styled.label`
  display: flex;
  flex-direction: column;

  & ~ & { margin-top: 2rem; }
`;

export const Text = styled.span`
  margin-bottom: 0.5rem;
`;

export const Tip = styled.p`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.darkGrey};
  font-size: 1.4rem;
  font-weight: 500;
`;

export default Container;
