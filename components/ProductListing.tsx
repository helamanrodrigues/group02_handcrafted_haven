import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/ProductListing.module.css';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

const ProductListing: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch product data from your API endpoint
    fetch('/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className={styles.container}>
      {products.map((product) => (
        <div key={product.id} className={styles.productCard}>
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={200}
            className={styles.productImage}
          />
          <h3 className={styles.productTitle}>{product.title}</h3>
          <p className={styles.productDescription}>{product.description}</p>
          <p className={styles.productPrice}>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;