import styled from 'styled-components';

const Container = styled.div`
  width: ${({ width }) => width ? `${width}px` : 'auto'};
  max-width: ${({ maxWidth }) => maxWidth ? `${maxWidth}px` : 'auto'};
  height: ${({ height }) => height ? `${height}px` : 'auto'};
  margin: ${({ auto }) => auto ? '0 auto' : null};
`;

export default Container;
