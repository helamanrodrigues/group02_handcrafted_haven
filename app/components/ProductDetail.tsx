import { notFound } from 'next/navigation';
import Image from 'next/image';
import styles from '../styles/ProductDetail.module.css';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

async function fetchProduct(id: string): Promise<Product> {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`; 
  console.log('Fetching URL:', url);
  try {
    const response = await fetch(url, { cache: 'no-store' });
    if (!response.ok) {
      throw new Error('Product not found');
    }
    return response.json();
  } catch (error) {
    notFound();
    throw error;
  }
}

interface ProductDetailProps {
  params: {
    id: string;
  };
}

const ProductDetail: React.FC<ProductDetailProps> = async ({ params }) => {
  try {
    const product = await fetchProduct(params.id);
    return (
      <div className={styles.productDetail}>
        <h1 className={styles.productTitle}>{product.title}</h1>
        <Image
          src={product.image}
          alt={product.title}
          width={600}
          height={400}
          className={styles.productImage}
        />
        <p className={styles.productDescription}>{product.description}</p>
        <p className={styles.productPrice}>${product.price}</p>
      </div>
    );
  } catch (error) {
    return <p>Product not found</p>;
  }
};

export default ProductDetail;


