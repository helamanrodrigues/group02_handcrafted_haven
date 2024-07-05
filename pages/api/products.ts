import type { NextApiRequest, NextApiResponse } from 'next';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Product[]>) {
  // Dummy data for products
  const products: Product[] = [
    {
      id: 1,
      title: 'Handcrafted Pottery',
      description: 'Beautifully handcrafted pottery made with love.',
      price: 45.00,
      image: '/images/pottery.jpg',
    },
    {
      id: 2,
      title: 'Woven Macrame',
      description: 'Intricate woven macrame for your home decor.',
      price: 30.00,
      image: '/images/macrame.jpg',
    },
  ];

  res.status(200).json(products);
}