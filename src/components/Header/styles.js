import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

export const Logo = styled.img`
  @media (max-width: 450px) {
    width: 40px;
    height: 40px;
  }
`;

export const Title = styled.h1`
  margin-left: 20px;
  color: ${({ theme }) => theme.primary};
  font-size: 2.8rem;
  font-weight: 600;
  line-height: 100%;

  @media (max-width: 450px) {
    margin-left: 10px;
    font-size: ${({ theme }) => theme.fontSubtitle};
  }
`;

export default Container;
