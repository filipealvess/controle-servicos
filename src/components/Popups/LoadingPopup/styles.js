import styled, { css } from 'styled-components';

const Container = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  ${({ isVisible }) => isVisible && css`display: flex;`}
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
  background-color: #FFFFFF;
`;

export const Text = styled.p`
  margin-left: 10px;
  font-weight: 500;
  animation: blink 1s infinite linear;

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.2; }
  }
`;

export default Container;
