import { useState } from 'react';
import { Container, Title, Form, Input, Button, ErrorMessage, Select, LogoImg } from './style';
import images from '../Img/index';  // Importando todas as imagens do índice

import { useNavigate } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpf, setCpf] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [endereco, setEndereco] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // Novo estado para confirmar a senha
  const [error, setError] = useState('');
  const [documentType, setDocumentType] = useState('cpf'); //Aqui defino que o cpf
  const [instituicao, setInstituicao] = useState('cpf'); //Aqui defino que o cpf
  const [foto, setFoto] = useState('')
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Verifica se todos os campos estão preenchidos
    if (!email || !password || !confirmPassword) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    // Verifica se as senhas coincidem
    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find((user: { email: string }) => user.email === email)) {
      setError('Usuário já existe');
      return;
    }

    // Adiciona o novo usuário ao localStorage
    users.push({ email, password, cnpj, cpf, endereco, instituicao, foto });
    localStorage.setItem('users', JSON.stringify(users));

    // Redireciona para a tela de login
    setError('');
    navigate('/login');

    if (foto) {
      localStorage.setItem('foto', foto);
      console.log('Foto salva no local storage:', foto);
    }
  };
  //Aqui botamos duas opções de radio button 
  //para indentificar se é pessoa fisica ou juridica
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      // Faça algo com o arquivo


      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          // Verifique se reader.result não é null
          if (reader.result) {
            setFoto(reader.result as string); // Fazendo um type assertion para string
          }
        };
        reader.readAsDataURL(file); // Lê o arquivo como URL base64
      }
    }
  };
  return (
    <Container>
      <LogoImg>
        <img src={images.logo} alt="Imagem do logo" />  {/* Corrigido o alt */}
      </LogoImg>
      <Title>Cadastro</Title>
      <Form onSubmit={handleRegister}>

        <div>
          <label>
            <input
              type="radio"
              value="cpf"
              name="documentType"
              checked={documentType === 'cpf'}
              onChange={() => setDocumentType('cpf')}
            />
            CPF
          </label>
          <label>
            <input
              type="radio"
              value="cnpj"
              name="documentType"
              checked={documentType === 'cnpj'}
              onChange={() => setDocumentType('cnpj')}
            />
            CNPJ
          </label>
        </div>
        <br />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Confirme a Senha"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        {documentType === 'cpf' && (
          <Input
            type="tel"
            placeholder="CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
          />
        )}
        {documentType === 'cnpj' && (
          <>
            <Input
              type="text"
              placeholder="CNPJ"
              value={cnpj}
              onChange={(e) => setCnpj(e.target.value)}
              required
            />
            <Input
              type="text"
              placeholder="Endereço"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
              required
            />
            {/* Campo para selecionar a foto */}
            <Input
              type="file"
              accept=".png, .jpg, .jpeg"
              onChange={handleFileChange}
              required
            />

            {/* Combo box para seleção de que tipo de instituição */}
            <Select
              value={instituicao}
              onChange={(e) => setInstituicao(e.target.value)}
              required
            >
              <option value="">Tipo de Insituição</option>
              <option value="Hotel">Hotel</option>
              <option value="Pousada">Pousada</option>
              <option value="Aluguel">Apartamento ou casa alugada</option>
              <option value="ApartHotel">Apart-Hotel</option>
              <option value="Resorts">Resorts</option>
              <option value="Acampamento">Hospedagem em Acampamento</option>
              <option value="Outros">Outros...</option>
            </Select>
          </>
        )}

        <Button type="submit">Cadastrar</Button>
        {error && <ErrorMessage>{error}</ErrorMessage>}

      </Form>
    </Container >
  );
}

export default Register;