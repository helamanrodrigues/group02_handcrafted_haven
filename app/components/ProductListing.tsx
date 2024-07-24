'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/ProductListing.module.css';
import { Category, Product } from '../lib/definitions';
import FilterCategory from './FilterCategory';


export default function ProductList({ fetchedproducts, fetchedcategories }: { fetchedproducts: Product[], fetchedcategories: Category[]} ) {
  if (!fetchedproducts || fetchedproducts.length === 0) {
    return <p>No products found.</p>;
  }
  // const products = await fetchProducts();
    const [products, setProducts] = useState<Product[]>(fetchedproducts);
    const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
    const [sortBy, setSortBy] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [priceRange, setPriceRange] = useState<string>('');
    const [loadMoreCount, setLoadMoreCount] = useState<number>(10);

    // useEffect(() => {
    //   // Fetching products from API or any source
    //   const fetchProducts = async () => {
    //     const response = await fetch('/api/products'); // Replace with your API endpoint
    //     const data = await response.json();
    //     console.log("product from db: ", products);
    //     console.log("productlisting: ", data);
    //     setProducts(data);
    //     setDisplayedProducts(data.slice(0, loadMoreCount));
    //   };
  
    //   fetchProducts();
    // }, [loadMoreCount]);
  
    const handleClearAll = () => {
      setSortBy('');
      setCategory('');
      setPriceRange('');
      setDisplayedProducts(products.slice(0, loadMoreCount));
    };
  
    const handleLoadMore = () => {
      setLoadMoreCount((prevCount) => prevCount + 10);
    };
  
    useEffect(() => {
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
    }, [category, priceRange, sortBy, products, loadMoreCount]);
  return (
          <div className={styles.productPage}>
            <aside className={styles.sidebar}>
                <h3>Filter by</h3>
                <div className={styles.filterSection}>
                <h4>Category</h4>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">All</option>
                    {fetchedcategories?.map((item) => (
                      <option value={item.category}>{item.category}</option>
                    ))}
                    {/* <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option> */}
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
                <FilterCategory categories={fetchedcategories}/>
            </aside>
            <div className={styles.productListing}>
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
                        {fetchedproducts.map((product) => (
                          <div key={product.id} className={styles.productCard}>
                            <img 
                              src={product.image}
                              alt={product.title}
                              // width={300}
                              // height={200}
                              // layout={'responsive'}
                              className={styles.productImage}
                            />
                            <h3 className={styles.productTitle}>{product.title}</h3>
                            <p className={styles.productDescription}>{product.description}</p>
                            <p className={styles.productPrice}>${product.price}</p>
                          </div>
                        ))}
                </div>
                  {displayedProducts.length < products.length && (
                <button className={styles.loadMore} onClick={handleLoadMore}>Load More</button>
                )}
            </div>
          </div>
  );
};