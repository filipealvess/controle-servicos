import styled, { css } from 'styled-components';

const Container = styled.article`
  display: flex;
  align-items: stretch;
  margin-bottom: 10px;

  ${({ isChecked }) => isChecked && css`
    ${CheckBox}, ${Price} { border-color: #000000; }
  `}
`;

export const CheckBox = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  gap: 5px;
  padding: 10px 15px;
  margin-right: 10px;
  border: 1px solid ${({ theme }) => theme.mediumGrey};
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s border-color;
`;

export const Price = styled.input`
  width: 30%;
  padding: 10px 15px;
  border: 1px solid ${({ theme }) => theme.mediumGrey};
  border-radius: 8px;
  transition: 0.3s border-color;
`;

export default Container;
