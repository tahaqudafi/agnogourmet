import pureOil500ml from "@/assets/500ML.png";
import pureOil250ml from "@/assets/250.png";
import spicedOil500ml from "@/assets/Spiced 500ML Olive.png";
import hofney from "@/assets/Hofney.png";
import oregano from "@/assets/OREGS.png";
import christmasBox from "@/assets/limitededish.png";

export interface Product {
  id: string;
  name: string;
  description: string;
  volume: string;
  image: string;
  price?: string;
  category: 'olive-oil' | 'honey' | 'spices' | 'gifts';
  purchaseLink?: string;
}

export const products: Product[] = [
  {
    id: 'spiced-olive-oil-500ml',
    name: 'Spiced Olive Oil',
    description: 'For roasting and bold flavor',
    volume: '500ml',
    image: spicedOil500ml,
    category: 'olive-oil',
    purchaseLink: 'https://www.agnogourmet.com/products/infused-olive-oil-with-aromatic-herbs-spices'
  },
  {
    id: 'extra-virgin-olive-oil-500ml',
    name: 'Extra Virgin Olive Oil',
    description: 'A staple for all your dishes',
    volume: '500ml',
    image: pureOil500ml,
    category: 'olive-oil',
    purchaseLink: 'https://www.agnogourmet.com/products/evo'
  },
  {
    id: 'extra-virgin-olive-oil-250ml',
    name: 'Extra Virgin Olive Oil',
    description: 'A staple for all your dishes',
    volume: '250ml',
    image: pureOil250ml,
    category: 'olive-oil',
    purchaseLink: 'https://www.agnogourmet.com/products/pure-extra-virgin-olive-oil-a-staple-for-all-your-dishes-250ml'
  },
  {
    id: 'pine-tree-honey-400g',
    name: 'Pine Tree Honey',
    description: 'Natural sweetness',
    volume: '400g',
    image: hofney,
    category: 'honey',
    purchaseLink: 'https://www.agnogourmet.com/products/pine-tree-honey'
  },
  {
    id: 'oregano-25g',
    name: 'Oregano',
    description: 'Premium Greek oregano',
    volume: '25g',
    image: oregano,
    category: 'spices',
    purchaseLink: 'https://www.agnogourmet.com/products/christmas-box-with-olive-oil-honey-and-oregano'
  },
  {
    id: 'limited-edition-christmas-box',
    name: 'Limited Edition Christmas Box',
    description: 'Perfect holiday gift collection',
    volume: 'Gift Set',
    image: christmasBox,
    category: 'gifts',
    purchaseLink: 'https://www.agnogourmet.com/products/christmas-box'
  }
];

export const getProductsByCategory = (category: Product['category']) => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};