import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #fffff;
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: #d4c8b3;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

export const Select = styled.select`
  padding: 10px;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
`; 

export const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #d4c8b3;
  color: white;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 0.875rem;
  margin-top: 1rem;
  text-align: center;
`;
export const LogoImg = styled.div`
  img {
    width: 100%; /* Largura ajustada */
    max-width: 300px;
    margin-bottom: -70px;
    height: auto;
    border-radius: 10px;
  }
`;