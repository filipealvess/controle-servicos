import styled, { css } from 'styled-components';

const Container = styled.article`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 40px;
  right: -100%;
  width: 90%;
  max-width: 450px;
  padding: 15px 20px;
  border-radius: 8px 0 0 8px;
  background-color: ${({ theme }) => theme.primary};
  color: #FFFFFF;
  box-shadow: 0 2px 5px 2px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition-duration: 0.3s;
  transition-property: right, background-color;

  &:hover { background-color: #272A45; }

  ${({ isVisible }) => isVisible && css`
    right: -2px;
  `}
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const Title = styled.p`
  font-weight: 500;
`;

export const Description = styled.p`
  font-size: 1.6rem;
  line-height: 130%;
`;

export default Container;
