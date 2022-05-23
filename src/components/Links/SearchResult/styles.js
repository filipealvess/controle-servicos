import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 1.2rem;
  font-weight: 500;
  text-align: left;
`;

export default Container;
