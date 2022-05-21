import styled from 'styled-components';

const Container = styled.label`
  display: flex;
  flex-direction: column;

  & ~ & { margin-top: 2rem; }
`;

export const Text = styled.span`
  margin-bottom: 0.5rem;
`;

export default Container;
