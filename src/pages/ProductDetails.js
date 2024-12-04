import React from 'react';
import TopBar from "../components/includes/TopBar";
import Header from "../components/includes/Header";
import Footer from "../components/includes/Footer";
import DetailsPage from "../components/screens/DetailsPage";
import DetailsReview from "../components/screens/DetailsReview";
import ProductPage from "../components/screens/ProductPage";

const ProductDetails = () => {
  return (
    <>
      <TopBar />
      <Header />
      <DetailsPage/>
      <DetailsReview/>
      <ProductPage/>
      <Footer />
     
    </>
  );
};





export default ProductDetails;
