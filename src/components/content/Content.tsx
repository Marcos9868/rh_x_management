import { ContentContainer, MarketingContainer, SecondMarketingContainer } from "./styles"
import marketingContainerLogo from '../../assets/logo1.jpg';
import secondMarketingLogo from '../../assets/logo2.jpg'

const Content = () => {
  return (
    <ContentContainer>
      <MarketingContainer>
        <img src={marketingContainerLogo} alt="" />
        <div>
          <h2>RH X Management, facilitando sua rotina de departamento pessoal</h2>
          <p>
            Precisa de um app para ajudar você no dia-a-dia no RH? Com o RH X Management, você agiliza
            esse processo
          </p>
        </div>
      </MarketingContainer>
      <SecondMarketingContainer>
        <div>
          <h3>
            O aplicativo RH X Management ajuda você nas rotinas de departamento pessoal de forma prática e rápida.
          </h3>
        </div>
        <img src={secondMarketingLogo} alt="" />
      </SecondMarketingContainer>
    </ContentContainer>
  )
}

export default Content