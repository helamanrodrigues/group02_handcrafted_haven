"use client";

import React from "react";
import ProductListing from "../components/ProductListing";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FreeShippingText from "../components/header/FreeShippingText";

const ProductListingPage: React.FC = () => {
  return (
    <main>
      <Header />
      <FreeShippingText />
      <ProductListing />
      <Footer />
    </main>
  );
};

export default ProductListingPage;
