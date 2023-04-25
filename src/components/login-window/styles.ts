import styled from "styled-components";

export const LoginWindowContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  padding: 2.5rem 3rem;
`;

export const UserImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6rem;
  height: 6rem;
  background-color: darkgreen;
  border: none;
  border-radius: 50%;
  margin: 0 auto;
  margin-bottom: 1rem;
  
  svg {
    color: #f5f5f5;
    width: 3rem;
    height: 3rem;
  }
`;

export const FormContainer = styled.div`
  gap: 1rem;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  width: 400px;
  height: 350px;
  background-color: darkblue;
  color: #f5f5f5;
  border-radius: 3rem;
  justify-content: center;
  gap: 1.5rem;
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