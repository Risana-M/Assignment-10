
import React, { useState } from "react";
import Products from "./Products";




function App() {

  const [products,setProduct] = useState([
    {
      id:1,
      title: 'POCO C75 5G (Aqua Bliss, 64 GB)',
      image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/2/g/-original-imahbr2cz5apcwze.jpeg?q=70',
      category:'categoryA',
      price: '7,499',
      prevValue: '10,999',
      offerPercentage: '31',
      offerPrice: '5,650',
      rating: 4,
      reviewCount: '5,807',
      ratingCount: '1,29,220',
      description: ['4 GB RAM | 64 GB ROM | Expandable Upto 1 TB',
        '17.48 cm (6.88 inch) HD+ Display', '50MP Rear Camera | 5MP Front Camera', '5160 mAh Battery', '4s Gen 2 5G Processor',
        '1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories'
      ]
    },

    {
      id:2,
      title: 'realme P3x 5G (Midnight Blue, 128 GB)',
      image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/j/n/1/-original-imah9gtmya9qhqse.jpeg?q=70',
      category:'categoryA',
      price: '12,999',
      prevValue: '17,999',
      offerPercentage: '27',
      offerPrice: '10,100',
      rating: 4.4,
      reviewCount: '837',
      ratingCount: '20,449',
      description: ['8 GB RAM | 128 GB ROM', '17.07 cm (6.72 inch) Full HD Display', '50MP Rear Camera | 8MP Front Camera',
        '6000 mAh Battery', 'Dimensity 6400 Processor', '1 Year Manufacturer Warranty for Device and 6 Months Manufacturer Warranty for Inbox Accessories'
      ]
    },

    {
      id:3,
      title: 'POCO M7 5G (Mint Green, 128 GB)',
      image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/w/0/-original-imah9wydggh9mtxt.jpeg?q=70',
      category:'categoryB',
      price: '8,999',
      prevValue: '12,999',
      offerPercentage: '30',
      offerPrice: '6,900',
      rating: 4.1,
      reviewCount: '2,800',
      ratingCount: '59,236',
      description: ['6 GB RAM | 128 GB ROM | Expandable Upto 1 TB',
        '17.48 cm (6.88 inch) HD+ Display', '50MP Rear Camera | 8MP Front Camera', '5160 mAh Battery', '4 Gen 2 5G Processor',
        '1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories'
      ]
    }]

  )

}


export default Products;


























/*import React, { useState } from "react";
import ProductCard from "./ProductCard";

const data = [
  {
    id: 1,
    title: "Ponds",
    price: 357,
    rating: 4.6,
    description: "Super Light Gel Moisturiser",
    image: "https://m.media-amazon.com/images/I/71uZy6F0ZJL.jpg"
  },
  {
    id: 2,
    title: "Cetaphil",
    price: 398,
    rating: 4.5,
    description: "Gentle Skin Cleanser",
    image: "https://m.media-amazon.com/images/I/61DKcGr12GL.jpg"
  },
  {
    id: 3,
    title: "Bajaj Almond Drops",
    price: 297,
    rating: 4.6,
    description: "Hair Oil",
    image: "https://m.media-amazon.com/images/I/71maSbrdJNL.jpg"
  }
];

function Products({ sortBy }) {
  let sortedData = [...data];

  if (sortBy === "low-to-high") {
    sortedData.sort((a, b) => a.price - b.price);
  }
  if (sortBy === "high-to-low") {
    sortedData.sort((a, b) => b.price - a.price);
  }
  if (sortBy === "rating") {
    sortedData.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="grid grid-cols-3 gap-6 p-4">
      {sortedData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Products;*/

