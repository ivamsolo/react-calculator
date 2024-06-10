import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/index.jsx'
import GlobalStyles from './global-style.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
)
