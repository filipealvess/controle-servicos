import styled from 'styled-components';

const Grid = styled.section`
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: 100%;
  }
`;

export default Grid;
