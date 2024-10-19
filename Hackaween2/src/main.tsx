import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Routes/app';
import { initializeUsers } from './Bd/users';

initializeUsers();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <App />
  </StrictMode>,
)
