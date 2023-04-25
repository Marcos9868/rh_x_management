import { 
  Copyright, 
  DevelopmentCopyright, 
  FooterContainer, 
  ListSocialMedia, 
  SocialMediaContainer
} from "./styles";
import { MdEmail } from 'react-icons/md';
import { FaDiscord, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterContainer>
      <SocialMediaContainer>
        <ListSocialMedia>
          <li><FaDiscord /></li>
          <li><FaLinkedin /></li>
          <li><MdEmail /></li>
        </ListSocialMedia>
      </SocialMediaContainer>
      <DevelopmentCopyright>
        <p>Desenvolvido por Marcos M. Ferreira</p>
        <Copyright>&copy;Todos os direitos reservados</Copyright>
      </DevelopmentCopyright>
    </FooterContainer>
  )
}

export default Footer