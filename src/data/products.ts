import { CategoryType } from './categories';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: CategoryType;
}

export const products: Product[] = [
  {
    id: "1",
    name: "New Spicy Zinger",
    price: 2490,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500",
    description: "New recipe with extra spicy seasoning",
    category: "What's new"
  },
  {
    id: "2",
    name: "Sanders Basket",
    price: 1990,
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500",
    description: "Original Recipe Chicken Pieces",
    category: "Solo Baskets"
  },
  {
    id: "3",
    name: "Zinger Combo",
    price: 2990,
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500",
    description: "Zinger Burger with Fries and Drink",
    category: "Combo"
  },
  {
    id: "4",
    name: "Family Box",
    price: 5990,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500",
    description: "Perfect for family sharing",
    category: "Boxes"
  },
  {
    id: "5",
    name: "Classic Burger",
    price: 1590,
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500",
    description: "Original chicken burger",
    category: "Burgers and sandwiches"
  },
  {
    id: "6",
    name: "Twister Combo",
    price: 2490,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500",
    description: "Twister wrap with sides",
    category: "Combo Baskets"
  },
  {
    id: "7",
    name: "Hot Wings",
    price: 1990,
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500",
    description: "Spicy chicken wings",
    category: "Juicy chicken"
  },
  {
    id: "8",
    name: "Potato Wedges",
    price: 990,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500",
    description: "Seasoned potato wedges",
    category: "Snacks"
  },
  {
    id: "9",
    name: "Pepsi",
    price: 590,
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500",
    description: "500ml Pepsi",
    category: "Drinks"
  },
  {
    id: "10",
    name: "Extra Sauce",
    price: 290,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500",
    description: "Additional sauce portions",
    category: "Additionally"
  }
];