import React from "react";
import TopBar from "../components/includes/TopBar";
import Header from "../components/includes/Header";
import SpotLight from "../components/screens/Spotlight";
import Brand from "../components/screens/Brand";
import Products from "../components/screens/Product";
import ProductsItem from "../components/screens/ProductsItem";
import DressStyle from "../components/screens/DressStyle";
import Reviews from "../components/screens/Reviews";
import Footer from "../components/includes/Footer";



function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <SpotLight />
      <Brand />
      <Products />
      <ProductsItem />
      <DressStyle/>
      <Reviews />
      <Footer />
    
     
    </>
  );
}

export default Home;
