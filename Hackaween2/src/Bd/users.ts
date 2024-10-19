// Função para inicializar o banco de dados local com usuários
export function initializeUsers() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
  
    // Verifica se o usuário "a" já está no localStorage e adiciona caso contrário
    if (!users.find((user: { email: string }) => user.email === 'a')) {
      users.push({ email: 'a', password: '1', cnpj:'', cpf:''});
    }
  
    localStorage.setItem('users', JSON.stringify(users));
  }
  
  // Função para buscar usuários no localStorage
  export function getUsers() {
    return JSON.parse(localStorage.getItem('users') || '[]');
  }
  
  // Função para verificar se o login é válido
  export function validateUser(email: string, password: string, cpf: string, cnpj:string) {
    const users = getUsers();
    const user = users.find((user: { email: string; password: string; cpf: string; cnpj: string; endereco: string;}) => user.email === email && user.password === password && user.cpf === cpf && user.cnpj === cnpj);
    return user !== undefined;
  }