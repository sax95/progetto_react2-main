import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Carica prima gli stili generali del template e poi quelli della dashboard,
// che possono sovrascrivere le regole generiche quando serve.
import './index.css'
import './App.css'
import App from './App.jsx'

// Cerca in index.html il contenitore root e vi monta l'intera interfaccia React.
createRoot(document.getElementById('root')).render(
  // In sviluppo StrictMode esegue controlli aggiuntivi per aiutare a trovare
  // effetti collaterali e comportamenti non sicuri nei componenti.
  <StrictMode>
    <App />
  </StrictMode>,
)
