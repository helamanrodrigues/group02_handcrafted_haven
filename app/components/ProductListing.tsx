import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/ProductListing.module.css';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

const ProductListing = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
  const [sortBy, setSortBy] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [priceRange, setPriceRange] = useState<string>('');
  const [loadMoreCount, setLoadMoreCount] = useState<number>(10);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
        setDisplayedProducts(data.slice(0, loadMoreCount));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [loadMoreCount]);

  useEffect(() => {
    const filterAndSortProducts = () => {
      let filteredProducts = [...products];
      if (category) {
        filteredProducts = filteredProducts.filter((product) => product.category === category);
      }
      if (priceRange) {
        const [min, max] = priceRange.split('-').map(Number);
        filteredProducts = filteredProducts.filter((product) => product.price >= min && product.price <= max);
      }
      if (sortBy) {
        if (sortBy === 'price-asc') {
          filteredProducts.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'price-desc') {
          filteredProducts.sort((a, b) => b.price - a.price);
        } else if (sortBy === 'newest') {
          filteredProducts.sort((a, b) => b.id - a.id);
        }
      }
      setDisplayedProducts(filteredProducts.slice(0, loadMoreCount));
    };

    filterAndSortProducts();
  }, [category, priceRange, sortBy, products, loadMoreCount]);

  const handleClearAll = () => {
    setSortBy('');
    setCategory('');
    setPriceRange('');
    setDisplayedProducts(products.slice(0, loadMoreCount));
  };

  const handleLoadMore = () => {
    setLoadMoreCount((prevCount) => prevCount + 10);
  };

  return (
    <div className={styles.productPage}>
      <aside className={styles.sidebar}>
        <h3>Filter by</h3>
        <div className={styles.filterSection}>
          <h4>Category</h4>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">All</option>
            <option value="Pottery">Pottery</option>
            <option value="Macrame">Macrame</option>
          </select>
        </div>
        <div className={styles.filterSection}>
          <h4>Price</h4>
          <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
            <option value="">All</option>
            <option value="0-50">$0 - $50</option>
            <option value="51-100">$51 - $100</option>
          </select>
        </div>
      </aside>
      <main className={styles.productListing}>
        <div className={styles.filterControls}>
          <button onClick={handleClearAll}>Clear All</button>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="">Sort by</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="newest">Newest</option>
          </select>
        </div>
        <div className={styles.products}>
          {displayedProducts.map((product) => (
            <Link key={product.id} href={`/product-listing/product/${product.id}`} className={styles.productCard}>
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
            </Link>
          ))}
        </div>
        {displayedProducts.length < products.length && (
          <button className={styles.loadMore} onClick={handleLoadMore}>Load More</button>
        )}
      </main>
    </div>
  );
};

export default ProductListing;


