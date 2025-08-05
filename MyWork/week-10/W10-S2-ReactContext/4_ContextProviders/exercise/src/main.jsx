import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { UserContext } from './contexts/UserContext';
import { UserProvider } from './contexts/UserContext';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
    <App/>
    </UserProvider>
  </StrictMode>,
)
