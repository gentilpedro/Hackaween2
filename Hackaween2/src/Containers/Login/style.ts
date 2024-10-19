import styled, { keyframes } from 'styled-components';

// Animação para os componentes subirem do fundo da tela
const slideUp = keyframes`
  from {
    transform: translateY(100vh);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fff; /* Fundo branco */
  animation: ${slideUp} 1s ease-out; /* Aplicando animação de subida */
`;

export const Title = styled.h1`
  color: #000; /* Título preto */
  margin-bottom: 20px;
  font-size: 3rem;
  animation: ${slideUp} 1s ease-out;
  animation-delay: 0.2s;
  animation-fill-mode: backwards;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  animation: ${slideUp} 1s ease-out;
  animation-delay: 0.4s;
  animation-fill-mode: backwards;

  /* Adicione um contêiner para os botões */
  > div {
    display: flex;
    justify-content: space-between; /* Espaço entre os botões */
    width: 100%; /* Largura total do contêiner */
    margin-top: 15px; /* Espaço acima dos botões */
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 8px;
  border: 1px solid #888;
  background-color: #f5f5f5; /* Fundo claro nos inputs */
  color: #333;
  font-size: 1rem;

  &::placeholder {
    color: #666;
  }

  animation: ${slideUp} 1s ease-out;
  animation-delay: 0.6s;
  animation-fill-mode: backwards;
`;

export const Button = styled.button`
  width: 48%; /* Largura dos botões reduzida */
  padding: 10px;
  border-radius: 8px;
  border: none;
  background-color: #000; /* Botão preto */
  color: #fff;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }

  animation: ${slideUp} 1s ease-out;
  animation-delay: 0.8s;
  animation-fill-mode: backwards;
`;

// Estilo para a mensagem de erro
export const ErrorMessage = styled.p`
  color: red; // Define a cor vermelha para a mensagem de erro
  margin-top: 10px; // Espaço acima da mensagem
`;
