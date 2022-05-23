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
  overflow-y: auto;

  @media (max-width: 850px) {
    padding: 3rem 4rem 9rem;    
  }

  @media (max-width: 700px) {
    padding: 3rem 4rem 10rem;    
  }

  @media (max-width: 500px) {
    padding: 2rem 2rem 8rem;
  }
`;

export const Logo = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  cursor: default;

  @media (max-width: 850px) {
    padding: 0.5rem;
  }
`;

export const Image = styled.img`
  margin-right: 10px;

  @media (max-width: 850px) {
    width: 30px;
    height: 30px;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.secondary};
  font-size: ${({ theme }) => theme.fontSubtitle};
  font-weight: 600;
  line-height: 100%;

  @media (max-width: 850px) {
    font-size: 1.6rem;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  margin: 1rem 0;
  background-color: rgba(255, 255, 255, 0.2);

  @media (max-width: 850px) {
    display: none;
  }
`;

export const Links = styled.ul`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  @media (max-width: 850px) {
    flex-direction: row;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1rem 1.5rem;
    background-color: ${({ theme }) => theme.primary};
    z-index: 1;

    & > ${Expanded} { display: none; }
  }
`;

export default Container;
