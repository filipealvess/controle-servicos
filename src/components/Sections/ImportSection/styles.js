import styled from 'styled-components';

const Container = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.lightGrey};
  color: ${({ theme }) => theme.primary};
  cursor: pointer;

  @media (max-width: 500px) {
    padding: 2rem;
  }
`;

export const Title = styled.p`
  margin: 2rem 0 1rem;
  font-size: ${({ theme }) => theme.fontSubtitle};
  font-weight: 600;
  text-align: center;
  line-height: 100%;
`;

export const Description = styled.p`
  font-size: 1.4rem;
  text-align: center;
`;

export default Container;
