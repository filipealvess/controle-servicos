import styled from 'styled-components';

const Container = styled.article`
  padding: 20px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.lightGrey};
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const Title = styled.p`
  width: 70%;
  font-weight: 600;
`;

export const Price = styled.p`
  color: ${({ theme }) => theme.primary};
  font-size: 1.2rem;
`;

export const Description = styled.p`
  font-size: 1.6rem;
`;

export default Container;
