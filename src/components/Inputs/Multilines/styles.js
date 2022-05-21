import styled from 'styled-components';

const Input = styled.textarea`
  padding: 10px 20px;
  min-height: 100px;
  border: 1px solid ${({ theme }) => theme.mediumGrey};
  border-radius: 8px;
  resize: vertical;
  transition: 0.3s border-color;

  &:focus { border-color: #000000; }
`;

export default Input;
