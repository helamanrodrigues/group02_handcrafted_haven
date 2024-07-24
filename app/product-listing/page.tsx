
import ProductList from '../components/ProductListing'; // Correct name
import FreeShippingText from '../components/header/FreeShippingText';
import { fetchProducts, getCategories } from '../lib/data';

export default async function Page() {
  const products = await fetchProducts();
  const categories = await getCategories();
    return (
        <main>
            <FreeShippingText/>
            <ProductList fetchedproducts={products} fetchedcategories={categories} />
        </main>
  );
};
