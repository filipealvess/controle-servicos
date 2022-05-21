import styled, { css } from 'styled-components';

const Container = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 4rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.lightGrey};
  color: ${({ theme }) => theme.primary};
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.secondary};
    opacity: 0;
    transition: 0.3s opacity;
  }

  &::after {
    content: 'IMPORTAR';
    position: absolute;
    top: 50%;
    left: 50%;
    color: ${({ theme }) => theme.primary};
    font-size: 3.2rem;
    font-weight: 600;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: 0.3s opacity;
  }
  
  ${({ isActive }) => isActive && css`
    &::before, &::after { opacity: 0.8; }
  `}
  
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
