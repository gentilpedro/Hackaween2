import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #ffffff; /* Fundo claro */
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px; /* Altura ajustada do cabeçalho */
  padding: 0 15px; /* Ajustando padding lateral */
  background-color: #ffffff ; /* Verde claro */
`;

export const LoginButton = styled.button`
  background-color: #d4c8b3; /* Verde mais claro */
  color: #266041; /* Texto em preto */
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
`;

export const BioButton = styled.button`
  background-color: #d4c8b3; /* Verde mais claro */
  color: #266041; /* Texto em preto */
  border: none;
  border-radius: 5px;
  padding: 5px 20px; /* Mantendo o padding para a altura desejada */
  font-size: 0.9rem; /* Tamanho da fonte */
  cursor: pointer;
  width: 300px; /* Definindo uma largura específica para o botão */
  text-align: center; /* Centralizando o texto */
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
`;

export const Title = styled.h2`
  font-size: 2rem; /* Tamanho maior para o título */
  color: #000; /* Texto em preto */
  margin-bottom: 10px;
`;

export const LixoImg = styled.div`
  img {
    width: 100%;
    max-width: 500px;
    height: auto;
    border-radius: 10px;
  }
`;

export const LogoImg = styled.div`
  img {
    width: 100%; /* Largura ajustada */
    max-width: 200px;
    height: auto;
    border-radius: 10px;
  }
`;

export const Paragraph = styled.p`
  font-size: 1rem; /* Tamanho do parágrafo */
  color: #555; /* Cor do texto */
  margin: 10px 0; /* Margens para espaçamento */
`;

export const Divider = styled.div`
  height: 1px; /* Altura da linha */
  background-color: #000; /* Cor da linha */
  margin: 20px 0; /* Margens superior e inferior */
`;

export const BoxContainer = styled.div`
  display: flex;
  justify-content: space-between; /* Espaçamento entre as caixas */
  margin: 20px; /* Margem nas laterais */
`;

export const Box = styled.div`
  display: flex;
  align-items: center; /* Alinha o conteúdo no centro verticalmente */
  width: calc(33.33% - 20px); /* Largura da caixa com espaçamento */
  background-color: #f9f9f9; /* Fundo das caixas */
  border-radius: 8px; /* Bordas arredondadas */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Sombra para um efeito de elevação */
  padding: 10px; /* Espaçamento interno */
`;

export const BoxImage = styled.div`
  img {
    width: 250px; /* Definindo a largura da imagem */
    height: auto; /* Manter a proporção */
    border-radius: 8px; /* Bordas arredondadas */
  }
`;

export const BoxText = styled.div`
  margin-left: 15px; /* Espaçamento entre a imagem e o texto */
`;

export const BoxTitle = styled.h3`
  font-size: 1.5rem; /* Tamanho do título */
  color: #266041; /* Cor do texto */
  margin: 0; /* Remove a margem padrão */
`;

export const BoxDescription = styled.p`
  font-size: 1rem; /* Tamanho da descrição */
  color: #555; /* Cor do texto */
`;

export const ContactButton = styled.button`
  background-color: #266041; /* Cor verde padrão do site */
  color: #fff; /* Texto branco */
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  margin-top: 10px; /* Espaçamento acima do botão */
  font-size: 0.9rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1f5034; /* Cor mais escura no hover */
  }
`;

export const Footer = styled.footer`
  background-color: #2e2e2e; /* Cor de fundo escura */
  color: #fff; /* Texto branco */
  padding: 40px 10%;
  text-align: left;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const FooterSection = styled.div`
  flex: 1;
  min-width: 200px;
  margin-bottom: 20px;
`;

export const FooterTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #ffffff;
`;

export const FooterText = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: #cccccc; /* Cor do texto para melhor contraste */
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterLink = styled.a`
  color: #ffffff;
  font-size: 0.9rem;
  margin-bottom: 5px;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #cccccc; /* Efeito hover mais claro */
  }
`;

export const FooterBottom = styled.div`
  text-align: center;
  margin-top: 20px;
  border-top: 1px solid #444; /* Linha separadora */
  padding-top: 10px;
`;
