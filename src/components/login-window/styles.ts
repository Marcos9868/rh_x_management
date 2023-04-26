import styled from "styled-components";

export const LoginWindowContainer = styled.div`
  background-image: url('src/assets/logoLogin.jpg');
  background-size: cover;
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;

`;

export const UserImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6rem;
  height: 6rem;
  background-color: #222222;
  border: none;
  border-radius: 50%;
  margin: 0 auto;
  z-index: 9;
  
  svg {
    color: #f5f5f5;
    width: 3rem;
    height: 3rem;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  width: 400px;
  height: 350px;
  background-color: #222222;
  color: #f5f5f5;
  border-radius: 3rem;
  justify-content: center;
  gap: 1.5rem;

  h4 {
    text-align: center;
  }

  p {
    text-decoration: none;
    outline: none;
    list-style: none;
    
  }
`;

export const Input = styled.input`
  height: 2.5rem;
  border-radius: 4px;
  outline: none;
  border: none;
  padding-left: 8px;
`;

export const Button = styled.button`
  height: 2.3rem;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
`;