"use client";

import React from 'react';
import ProductListing from '../app/components/ProductListing';
import Footer from "../app/components/Footer";
import Header from "../app/components/Header";
import FreeShippingText from '../app/components/header/FreeShippingText';

const ProductListingPage: React.FC = () => {
  return (
    <main>
      <Header />
      <FreeShippingText/>
      <ProductListing />
      <Footer />
    </main>
  );
};

export default ProductListingPage;