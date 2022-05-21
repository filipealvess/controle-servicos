import styled from 'styled-components';
import Expanded from '../../Sections/Expanded/styles';

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;

  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

export const Menu = styled.aside`
  display: flex;
  flex-direction: column;
  position: relative;
  min-width: 300px;
  padding: 2rem;
  background-color: ${({ theme }) => theme.primary};

  @media (max-width: 850px) {
    min-width: 0;
    padding: 1.5rem;
  }
`;

export const Main = styled.main`
  flex-grow: 1;
  padding: 3rem 4rem;

  @media (max-width: 500px) {
    padding: 2rem;
  }
`;

export const Logo = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  @media (max-width: 700px) {
    padding: 1rem;
  }
`;

export const Image = styled.img`
  margin-right: 10px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.secondary};
  font-size: ${({ theme }) => theme.fontSubtitle};
  font-weight: 600;
  line-height: 100%;

  @media (max-width: 700px) {
    font-size: 1.8rem;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  margin: 1rem 0;
  background-color: rgba(255, 255, 255, 0.2);
`;

export const Links = styled.ul`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  @media (max-width: 850px) {
    flex-direction: row;

    & > ${Expanded} { display: none; }
  }
`;

export default Container;
