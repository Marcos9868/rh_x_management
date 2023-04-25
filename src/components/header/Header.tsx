import { HeaderContainer, LogoContainer, MenuContainer } from "./styles"

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <h1>Logo</h1>
      </LogoContainer>
      <MenuContainer>
        <ul>
          <li>Cadastrar Funcionários</li>
          <li>Gerar Holerites</li>
          <button>Login</button>
        </ul>
      </MenuContainer>
    </HeaderContainer>
  )
}

export default Header