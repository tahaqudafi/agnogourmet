import pureOil500ml from "@/assets/500ML.png";
import spicedOil500ml from "@/assets/Spiced 500ML Olive.png";
import hofney from "@/assets/Hofney.png";

export interface Product {
  id: string;
  name: string;
  description: string;
  volume: string;
  image: string;
  price?: string;
  category: 'olive-oil' | 'honey' | 'spices';
}

export const products: Product[] = [
  {
    id: 'spiced-olive-oil-500ml',
    name: 'Spiced Olive Oil',
    description: 'For roasting and bold flavor',
    volume: '500ml',
    image: spicedOil500ml,
    category: 'olive-oil'
  },
  {
    id: 'extra-virgin-olive-oil-500ml',
    name: 'Extra Virgin Olive Oil',
    description: 'A staple for all your dishes',
    volume: '500ml',
    image: pureOil500ml,
    category: 'olive-oil'
  },
  {
    id: 'pine-tree-honey-400g',
    name: 'Pine Tree Honey',
    description: 'Natural sweetness',
    volume: '400g',
    image: hofney,
    category: 'honey'
  }
];

export const getProductsByCategory = (category: Product['category']) => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};