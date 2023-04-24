import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 5rem;
`;

export const LogoContainer = styled.div`
  display: flex;
  width: 30%;
  height: 5rem;
  background-color: darkgreen;
  justify-content: center;
  align-items: center;
`;

export const MenuContainer = styled.div`
  display: flex;
  width: 70%;
  height: 5rem;
  background-color: darkred;
  
  ul {
    display: flex;
    width: 100%;
    height: 100%;
    list-style: none;
    gap: 5rem;
    justify-content: center;
    align-items: center;
  }
`;
