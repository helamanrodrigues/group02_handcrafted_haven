"use client";

import React from 'react';
import ProductListing from '../components/ProductListing';
import FreeShippingText from '../components/header/FreeShippingText';

const ProductListingPage: React.FC = () => {
  return (
    <main>
      <FreeShippingText/>
      <ProductListing />
    </main>
  );
};

export default ProductListingPage;