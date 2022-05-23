import styled from 'styled-components';

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

export default Container;
