// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Notestate from './context/Notestate.jsx'

createRoot(document.getElementById('root')).render(
  <Notestate>
    <App />
  </Notestate>
)
