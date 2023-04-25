import styled from "styled-components";

export const LoginWindowContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  padding: 5.5rem 3rem;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  width: 400px;
  height: 400px;
  background-color: darkblue;
  color: #f5f5f5;
  border-radius: 7px;
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
  border-radius: 5px;
  cursor: pointer;
`;