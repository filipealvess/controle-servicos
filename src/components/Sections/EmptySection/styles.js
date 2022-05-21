import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.p`
  margin-bottom: 5px;
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
  text-align: center;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.primary};
  font-size: 1.4rem;
  font-weight: 500;
  text-align: center;
`;

export default Container;
