import dress from '../assets/dress.webp'
import dress1 from '../assets/dress1.webp'
import dress2 from '../assets/dress2.webp'
import dress3 from '../assets/dress3.webp'
import dress4 from '../assets/dress4.webp'
import dress5 from '../assets/dress5.webp'
import menTishrt from '../assets/menTishrt.webp'
import menTishrt2 from '../assets/menTishrt2.webp'
import menTishrt3 from '../assets/menTishrt3.webp'
import menShirt from '../assets/menShirt.webp'
import menShirt1 from '../assets/menShirt1.webp'







export const products = [
    { id: 1, name: "T-shirt", category: "Men's Clothing", price: 19.99, size: "M", quantity: 2 },
    { id: 2, name: "Jeans", category: "Women's Clothing", price: 49.99, size: "L", quantity: 1 },
    { id: 3, name: "Jacket", category: "Men's Clothing", price: 89.99, size: "XL", quantity: 1 },
    { id: 4, name: "Sweater", category: "Women's Clothing", price: 34.99, size: "M", quantity: 3 },
    { id: 5, name: "Sneakers", category: "Footwear", price: 59.99, size: "42", quantity: 1 },
    { id: 6, name: "Dress", category: "Women's Clothing", price: 69.99, size: "S", quantity: 1 },
    { id: 7, name: "Shorts", category: "Men's Clothing", price: 25.99, size: "L", quantity: 2 },
    { id: 8, name: "Blouse", category: "Women's Clothing", price: 29.99, size: "S", quantity: 2 },
    { id: 9, name: "Tracksuit", category: "Men's Clothing", price: 49.99, size: "M", quantity: 1 },
    { id: 10, name: "Cardigan", category: "Women's Clothing", price: 39.99, size: "M", quantity: 1 },
  ];
  
  export const womenShopping = [
  {
    id: 1,
    name: "Dress",
    category: "Clothing",
    price: 49.99,
    brand:"KALINI",
    sizeOptions: ["S", "M", "L", "XL"],
    colors: ["Red", "Blue", "Black"],
    inStock: true,
    image:dress,
    description:"Kurta With Trousers & Dupatta"
  },
  {
    id: 2,
    name: "Dress",
    category: "Clothing",
    price: 79.99,
    brand:"Libas",
    sizeOptions: ["S", "M", "L", "XL"],
    colors: ["Nude", "Black"],
    inStock: true,
    image:dress1,
    description:"Embroidered A-Line Kurta Sets"
  },
  {
    id: 3,
    name: "Dress",
    category: "Clothing",
    brand:"Indo Era",
    sizeOptions: ["S", "M", "L", "XL"],
    price: 99.99,
    colors: ["Beige", "Brown"],
    inStock: false,
    image:dress2,
    description:"Embroidered Kurta Set"
  },
  {
    id: 4,
    name: "Dress",
    category: "Clothing",
    price: 24.99,
    brand:"Libas",
    sizeOptions: ["S", "M", "L", "XL"],
    material: "Gold Plated",
    inStock: true,
    image:dress3,
    description:"Printed Anarkali Kurta Set"
  },
   {
    id: 5,
    name: "Dress",
    category: "Clothing",
    price: 24.99,
    brand:"Indo Era",
    sizeOptions: ["S", "M", "L", "XL"],
    material: "Gold Plated",
    inStock: true,
    image:dress4,
    description:"Kurta With Trousers & Dupatta"
  },
  {
    id: 6,
    name: "Dress",
    category: "Clothing",
    price: 24.99,
    brand:"KALINI",
    sizeOptions: ["S", "M", "L", "XL"],
    material: "Gold Plated",
    inStock: true,
    image:dress5,
    description:"Kurta with Trouser &  Dupatta"
  },
  {
    id: 7,
    name: "Dress",
    category: "Clothing",
    price: 24.99,
    brand:"KALINI",
    sizeOptions: ["S", "M", "L", "XL"],
    material: "Gold Plated",
    inStock: true,
    image:dress,
    description:"Embroidered Kurti Set"
  },
  {
    id: 8,
    name: "Dress",
    category: "Clothing",
    price: 24.99,
    brand:"Libas",
    sizeOptions: ["S", "M", "L", "XL"],
    material: "Gold Plated",
    inStock: true,
    image:dress1,
    description:"Woven Design Winter Kurta Set"
  },
  {
    id: 9,
    name: "Dress",
    category: "Clothing",
    price: 24.99,
    brand:"Indo Era",
    sizeOptions: ["S", "M", "L", "XL"],
    material: "Gold Plated",
    inStock: true,
    image:dress2,
    description:"Kurta With Trousers & Dupatta"
  },
  {
    id: 10,
    name: "Dress",
    category: "Clothing",
    price: 24.99,
    brand:"Indo Era",
    sizeOptions: ["S", "M", "L", "XL"],
    material: "Gold Plated",
    inStock: true,
    image:dress3,
    description:"Woven Design Winter Kurta Set"
  },
];

export const menShopping = [
  {
    id: 1,
    name: "Casual Shirt",
    category: "Clothing",
    price: 39.99,
    brand:"POWERLOOK",
    sizeOptions: ["M", "L", "XL", "XXL"],
    colors: ["White", "Navy", "Green"],
    inStock: true,
    image:menShirt,
    description: "Slim Fit Cotton Casual Shirt"

  },
  {
    id: 2,
    name: "TShirt",
    category: "Clothing",
    price: 89.99,
    brand:"U.S.Polo",
    sizeOptions: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Gray"],
    inStock: true,
    image:menTishrt,
    description: "Men Solid Slim Fit T-shirt"

  },
  {
    id: 3,
    name: "Casual Shirt",
    category: "Clothing",
    price: 49.99,
    brand:"Levis",
    sizeOptions: ["S", "M", "L", "XL"],
    material: "Genuine Leather",
    colors: ["Brown", "Black"],
    inStock: true,
    image:menShirt1,
    description: "Spread Collar Casual Shirt"

  },
  {
    id: 4,
    name: "TShirt",
    category: "Clothing",
    price: 149.99,
    brand: "Timeless Co.",
    sizeOptions: ["S", "M", "L", "XL"],
    inStock: true,
    image:menTishrt,
    description: "Men Solid Slim Fit T-shirt"
  },
  {
    id: 5,
    name: "TShirt",
    category: "Clothing",
    price: 149.99,
     brand:"Levis",
     sizeOptions: ["S", "M", "L", "XL"],
    inStock: true,
    image:menTishrt2,
    description: "Cotton Slim Fit T-shirt"
  },
   {
    id: 6,
    name: "TShirt",
    category: "Clothing",
    price: 149.99,
    brand:"POWERLOOK",
    sizeOptions: ["S", "M", "L", "XL"],
    inStock: true,
    image:menTishrt3,
    description: "Printed Cotton Lounge T-shirt"
  },
  {
    id: 7,
    name: "TShirt",
   category: "Accessories",
    price: 149.99,
    brand:"U.S.Polo",
    sizeOptions: ["S", "M", "L", "XL"],
    inStock: true,
    image:menTishrt,
    description: "Solid V-Neck Lounge T-shirt"
  },
  {
    id: 8,
    name: "Casual Shirt",
    category: "Accessories",
    price: 149.99,
    brand: "Timeless Co.",
    sizeOptions: ["S", "M", "L", "XL"],
    inStock: true,
    image:menShirt,
    description: "Men Slim Fit Solid Shirt"
  },
  {
    id: 9,
    name: "TShirt",
    category: "Accessories",
    price: 149.99,
    brand:"U.S.Polo",
    sizeOptions: ["S", "M", "L", "XL"],
    inStock: true,
    image:menTishrt3,
    description: "Printed Cotton Lounge T-shirt"
  },
  {
    id: 10,
    name: "Casual Shirt",
    category: "Accessories",
    price: 149.99,
    brand:"Levis",
    sizeOptions: ["S", "M", "L", "XL"],
    inStock: true,
    image:menShirt,
    description: "Relaxed Fit Casual Shirt"
  },
];
