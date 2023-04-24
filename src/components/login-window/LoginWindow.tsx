const LoginWindow = () => {
  return (
    <>
      <h4>Acesso RH X Management</h4>
      <input 
        type="email" 
        name="email" 
        id="email" 
        placeholder="Digite seu email" 
        required
      />
      <input 
        type="password" 
        name="password" 
        id="password"
        placeholder="Digite sua senha"
        required 
      />
      <p>Não possui conta? Criar Conta</p>
      <button>Entrar</button>
    </>
  )
}

export default LoginWindow