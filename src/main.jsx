import React from 'react';
import ReactDOM from 'react-dom'; 
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import AppRoutes from "./routes/index"; 

import './index.css';
import Header from './amazon/components/Header';
import TopNavBar from './amazon/components/TopNavBar';
import ShoppingCart from './components/header/ShoppingCart';
import { Provider } from 'react-redux';
import store from './store/Store';
import imagea from "./assets/images/banner.jpeg"
import CartPage from './components/CartPage';

const images = [
  imagea,
  imagea,
  imagea,
];
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <Header />
      <TopNavBar />
      <ShoppingCart />
      <CartPage />
      <AppRoutes />
    </Provider>
  </React.StrictMode>
);
