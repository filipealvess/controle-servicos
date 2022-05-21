import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  padding: 10px 20px;
  border: 1px solid ${({ theme }) => theme.mediumGrey};
  border-radius: 8px;
`;

export const Input = styled.input`
  flex: 1;
  height: 100%;
  min-width: 0;
`;

export default Container;
