import {
  Container, Header, LoginButton, ImageContainer, TextContainer, Title, LixoImg,
  LogoImg, Paragraph, BioButton, Divider, BoxContainer, Box, BoxImage, BoxText, BoxTitle, BoxDescription,
  ContactButton, Footer, FooterContent, FooterSection, FooterTitle, FooterText, FooterLinks, FooterLink, FooterBottom
} from './style';
import images from '../Img/index';  // Importando todas as imagens do índice
import { useNavigate } from 'react-router-dom'; // Importando o useNavigate

function Body() {
  const navigate = useNavigate(); // Cria uma instância do hook useNavigate

  const handleLoginClick = () => {
    navigate('/login'); // Redireciona para a página de login
  };

  return (
    <Container>
      <Header>
        <LogoImg>
          <img src={images.logo} alt="Imagem do logo" />  {/* Corrigido o alt */}
        </LogoImg>
        <h1>GreenScapes</h1>
        <LoginButton onClick={handleLoginClick}>Login</LoginButton>  {/* Adiciona o evento de clique */}
      </Header>
      <div style={{ display: 'flex', width: '100%', padding: '40px 20px' }}>
        <ImageContainer style={{ marginTop: '20px' }}>
          <LixoImg>
            <img src={images.lixo} alt="Imagem de lixo" />
          </LixoImg>
        </ImageContainer>
        <TextContainer>
          <Title>Podemos mudar o mundo!</Title>
          <Paragraph>
            Somos uma plataforma que conecta você a experiências únicas de turismo sustentável. Trabalhe em projetos que fazem a diferença enquanto explora novos destinos e aprende sobre as culturas locais. Junte-se a nós e faça parte dessa mudança!
          </Paragraph>
          <BioButton onClick={() => window.location.href = '/biografia'}>
            Quem somos
          </BioButton>
        </TextContainer>
      </div>
      <Divider />

      <div style={{ padding: '20px 10%' }}>
        <BoxContainer>
          <Box>
            <BoxImage>
              <img src={images.boxImage1} alt="Imagem 1" /> {/* Imagem 1 */}
            </BoxImage>
            <BoxText>
              <BoxTitle>Título 1</BoxTitle>
              <BoxDescription>
                Parceiros do GreenPeace, estamos trabalhando no reflorestamento de matas queimadas, temos vagas para trabalho voluntario no
                Alaska, Texas e Flórida, para mais informações entre em contato.
              </BoxDescription>
              <ContactButton>Entre em Contato</ContactButton> {/* Botão adicionado */}
            </BoxText>
          </Box>
          <Box>
            <BoxImage>
              <img src={images.boxImage2} alt="Imagem 2" /> {/* Imagem 2 */}
            </BoxImage>
            <BoxText>
              <BoxTitle>Maldivas</BoxTitle>
              <BoxDescription>
                Somos uma casa de hospedagem nas Maldivas, oferecendo uma estadia de 7 dias por R$50 por dia, em troca de trabalho voluntário de 4 horas por dia na limpeza de praias.
              </BoxDescription>
              <ContactButton>Entre em Contato</ContactButton> {/* Botão adicionado */}
            </BoxText>
          </Box>
          <Box>
            <BoxImage>
              <img src={images.boxImage3} alt="Imagem 3" /> {/* Imagem 3 */}
            </BoxImage>
            <BoxText>
              <BoxTitle>Título 3</BoxTitle>
              <BoxDescription>
                Somos uma instituição no Egito que combate a fome e buscamos voluntários para trabalhar com crianças por 14 dias. Estadia grátis, com 7 dias de folga.
              </BoxDescription>
              <ContactButton>Entre em Contato</ContactButton> {/* Botão adicionado */}
            </BoxText>
          </Box>
        </BoxContainer>
      </div>

      {/* Footer */}
      <Footer>
        <FooterContent>
          <FooterSection>
            <FooterTitle>Política de Doação</FooterTitle>
            <FooterText>
              Saiba como suas doações são usadas para promover o voluntariado e apoiar comunidades ao redor do mundo. Transparência é a nossa prioridade.
            </FooterText>
          </FooterSection>
          <FooterSection>
            <FooterTitle>Relatórios Anuais</FooterTitle>
            <FooterText>
              Acesse nossos relatórios anuais e veja o impacto que nossas iniciativas de voluntariado têm gerado globalmente.
            </FooterText>
          </FooterSection>
          <FooterSection>
            <FooterTitle>Política de Comunidade</FooterTitle>
            <FooterText>
              Nossos voluntários seguem um código de conduta que promove respeito e colaboração em todas as nossas atividades.
            </FooterText>
          </FooterSection>
          <FooterSection>
            <FooterTitle>Contato</FooterTitle>
            <FooterText>Email: contato@nossaorg.com</FooterText>
            <FooterText>Telefone: +55 (11) 1234-5678</FooterText>
            <FooterText>Endereço: Av. Exemplo, 123, São Paulo, SP</FooterText>
          </FooterSection>
          <FooterSection>
            <FooterTitle>Siga-nos</FooterTitle>
            <FooterLinks>
              <FooterLink href="#">Facebook</FooterLink>
              <FooterLink href="#">Instagram</FooterLink>
              <FooterLink href="#">Twitter</FooterLink>
            </FooterLinks>
          </FooterSection>
        </FooterContent>
        <FooterBottom>
          <FooterText>© 2024 Nossa Organização. Todos os direitos reservados.</FooterText>
        </FooterBottom>
      </Footer>

    </Container>
  );
}

export default Body;
