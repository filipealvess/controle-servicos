import styled from 'styled-components';
import NewButton from '../NewButton/styles';
import SearchBar from '../SearchBar/styles';

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;

  & > ${NewButton} { width: 15%; }

  @media (max-width: 1000px) {
    flex-wrap: wrap;
    
    & > ${SearchBar} {
      order: 3;
      width: 100%;
      margin-top: 20px;
    }

    & > ${NewButton} { width: auto; }
  }
`;

export const Title = styled.h1`
  width: 50%;
  font-size: ${({ theme }) => theme.fontSubtitle};
`;

export default Container;
