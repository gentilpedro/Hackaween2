import { Container, Header, LoginButton, ImageContainer, TextContainer, Title, LixoImg, LogoImg, Paragraph, BioButton, Divider, BoxContainer, Box, BoxImage, BoxText, BoxTitle, BoxDescription } from './style';
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
      
      {/* Seção das caixas */}
      <div style={{ padding: '20px 10%' }}>
        <BoxContainer>
          <Box>
            <BoxImage>
              <img src={images.boxImage1} alt="Imagem 1" /> {/* Imagem 1 */}
            </BoxImage>
            <BoxText>
              <BoxTitle>Título 1</BoxTitle>
              <BoxDescription>Descrição da primeira caixa que descreve o que fazemos.</BoxDescription>
            </BoxText>
          </Box>
          <Box>
            <BoxImage>
              <img src={images.boxImage2} alt="Imagem 2" /> {/* Imagem 2 */}
            </BoxImage>
            <BoxText>
              <BoxTitle>Título 2</BoxTitle>
              <BoxDescription>Descrição da segunda caixa que descreve nossos serviços.</BoxDescription>
            </BoxText>
          </Box>
          <Box>
            <BoxImage>
              <img src={images.boxImage3} alt="Imagem 3" /> {/* Imagem 3 */}
            </BoxImage>
            <BoxText>
              <BoxTitle>Título 3</BoxTitle>
              <BoxDescription>Descrição da terceira caixa que fala sobre nosso impacto.</BoxDescription>
            </BoxText>
          </Box>
        </BoxContainer>
      </div>
    </Container>
  );
}

export default Body;
