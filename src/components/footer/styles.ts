import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: #181818;
  color: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10rem;
  bottom: 0;
  position: fixed;
  gap: 1.5rem;
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ListSocialMedia = styled.div`
  display: flex;
  list-style: none;
  gap: 2rem;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const DevelopmentCopyright = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const Copyright = styled.p`
  margin-left: 1.3rem;
`;