import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 5rem;
  background-color: #181818;
`;

export const LogoContainer = styled.div`
  display: flex;
  width: 30%;
  height: 5rem;
  justify-content: center;
  align-items: center;
  color: #f5f5f5
`;

export const MenuContainer = styled.div`
  display: flex;
  width: 70%;
  height: 5rem;
  padding-left: 4rem;
  
  ul {
    display: flex;
    width: 100%;
    height: 100%;
    list-style: none;
    gap: 5rem;
    justify-content: center;
    align-items: center;
    color: #f5f5f5;

    button {
      width: 8rem;
      height: 3rem;
      background-color: blueviolet;
      border: none;
      border-radius: 5px;
      font-size: medium;
      cursor: pointer;
      color: black;

      &:hover {
        background-color: violet;
      }
    }
  }
`;
