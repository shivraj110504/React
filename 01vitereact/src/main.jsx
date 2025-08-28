import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Shiv from './shiv.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Shiv />
    <App />
  </StrictMode>

)


// 
