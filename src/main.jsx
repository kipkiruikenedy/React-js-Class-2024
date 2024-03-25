import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AppRoutes from "./routes/index.jsx"
import Navbar from './Navbar.jsx'
import Header from './amazon/components/Header.jsx'
import TopNavBar from './amazon/components/TopNavBar.jsx'
import Carousel from './carousels/Carousel.jsx'
import imagea from "./assets/images/banner.jpeg"
import ShoppingCart from './components/header/ShoppingCart.jsx'
import { Provider } from 'react-redux';
import store from './store/Store.js';

const images = [
  imagea,
  imagea,
  imagea,
 
];


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
      <Header />
      <TopNavBar />
      <ShoppingCart />
      <AppRoutes>
        <App />
      </AppRoutes>
    </Provider>
  </React.StrictMode>,
)
