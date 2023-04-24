import { HeaderContainer, LogoContainer, MenuContainer } from "./styles"

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <h1>Logo</h1>
      </LogoContainer>
      <MenuContainer>
        <ul>
          <li>Cadastro Funcionários</li>
          <li>Gerar Holerites</li>
          <li><a href="/login">Login</a></li>
        </ul>
      </MenuContainer>
    </HeaderContainer>
  )
}

export default Header