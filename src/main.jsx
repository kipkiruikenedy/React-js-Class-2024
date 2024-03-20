import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AppRoutes from "./routes/index.jsx"
import Navbar from './Navbar.jsx'
import Header from './components/header/Header.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Header />
   <AppRoutes> 
      <App />
    </AppRoutes>
  </React.StrictMode>,
)
