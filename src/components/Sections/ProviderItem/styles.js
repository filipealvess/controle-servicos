import styled from 'styled-components';

const Container = styled.article`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.mediumGrey};
  cursor: pointer;
  transition-duration: 0.3s;
  transition-property: border-color, transform;

  &:hover {
    border-color: ${({ theme }) => theme.darkGrey};
    transform: scale(1.02);
  }
`;

export const Content = styled.div`
  flex-grow: 1;
  overflow: hidden;
`;

export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 10px;
  border-radius: 50%;
`;

export const Name = styled.p`
  margin-bottom: 5px;
  font-weight: 500;
`;

export const Services = styled.p`
  position: relative;
  width: 100%;
  font-size: 1.4rem;
  white-space: nowrap;

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 100%;
    background-image: linear-gradient(to left, #FFFFFF, #FFFFFF00);
  }
`;

export default Container;
