import styled, { css } from 'styled-components';

const Container = styled.div`
  display: none;
  justify-content: center;
  align-items: flex-start;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 4rem 2rem;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  overflow-y: auto;
  transition: 0.3s opacity;

  ${({ isVisible }) => isVisible && css`display: flex;`}

  ${({ isAnimated }) => isAnimated && css`opacity: 1;`}
`;

export const Content = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 30px;
  border-radius: 8px;
  background-color: #FFFFFF;

  @media (max-width: 850px) {
    padding: 20px;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const Text = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
`;

export const Profile = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-size: ${({ theme }) => theme.fontSubtitle};
  font-weight: 600;
`;

export const Section = styled.section`
  padding: 20px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.lightGrey};

  & ~ & { margin-top: 10px; }
`;

export const SectionHeader = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.primary};
`;

export const SectionTitle = styled.p`
  margin-left: 5px;
  font-size: 1.4rem;
  font-weight: 600;
`;

export default Container;
