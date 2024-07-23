import type { NextApiRequest, NextApiResponse } from 'next';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface ErrorResponse {
  message: string;
}

const products: Product[] = [
  {
    id: 1,
    title: 'Handcrafted Pottery',
    description: 'Beautifully handcrafted pottery made with love.',
    price: 45.00,
    image: '/images/pottery.jpg',
    category: 'Pottery', 
  },
  {
    id: 2,
    title: 'Woven Macrame',
    description: 'Intricate woven macrame for your home decor.',
    price: 30.00,
    image: '/images/macrame.jpg',
    category: 'Macrame', 
  },
  {
    id: 3,
    title: 'Woven Macrame',
    description: 'Intricate woven macrame for your home decor.',
    price: 30.00,
    image: '/images/macrame.jpg',
    category: 'Macrame', 
  },
  {
    id: 4,
    title: 'Handcrafted Pottery',
    description: 'Beautifully handcrafted pottery made with love.',
    price: 45.00,
    image: '/images/pottery.jpg',
    category: 'Pottery', 
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse<Product | Product[] | ErrorResponse>) {
  if (req.method === 'GET') {
    const { id, category } = req.query;

    if (id) {
      const productId = parseInt(id as string, 10);

      if (isNaN(productId)) {
        return res.status(400).json({ message: 'Invalid ID format' });
      }

      const product = products.find((p) => p.id === productId);
      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json({ message: 'Product not found' });
      }
    } else if (category) {
      const filteredProducts = products.filter((p) => p.category.toLowerCase() === (category as string).toLowerCase());
      if (filteredProducts.length > 0) {
        res.status(200).json(filteredProducts);
      } else {
        res.status(404).json({ message: 'No products found for this category' });
      }
    } else {
      res.status(200).json(products);
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}





