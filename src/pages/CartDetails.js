import React from 'react';
import TopBar from "../components/includes/TopBar"; 
import Header from "../components/includes/Header";  
import CartPage from "../components/screens/CartPage";
import Footer from '../components/includes/Footer';

const CartDetails = () => {
  return (
    <>
      <TopBar />
      <Header />
      <CartPage/>
      <Footer/>
      
    </>
  );
};

export default CartDetails;
