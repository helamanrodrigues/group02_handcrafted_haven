"use client";

import React from 'react';

import FreeShippingText from '../../../components/header/FreeShippingText';
import ProductDetail from '../../../components/ProductDetail';

interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ params }) => {
  return (
    <main>
      <FreeShippingText />
      <ProductDetail params={params} />
    </main>
  );
};

export default ProductDetailPage;








