import { Button, Form, FormContainer, Input, LoginWindowContainer, UserImage } from "./styles"
import { AiOutlineUser } from 'react-icons/ai';

const LoginWindow = () => {
  return (
    <LoginWindowContainer>
      <FormContainer>
        <UserImage>
          <AiOutlineUser />
        </UserImage>
        <Form>
          <h4>Acesso RH X Management</h4>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Digite seu email"
            required
          />
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Digite sua senha"
            required
          />
          <p>Não possui conta? <a href="/sign-up">Criar Conta</a></p>
          <Button>Entrar</Button>
        </Form>
      </FormContainer>
    </LoginWindowContainer>
  )
}

export default LoginWindow