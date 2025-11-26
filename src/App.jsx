import { useState } from "react";
import NavBar from "./Components/NavBar";
import FilterDiv from "./Components/FilterDiv";
import ProductCard from "./Components/ProductCard";
import DescriptionList from "./Components/DescriptionList";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: 'POCO C75 5G (Aqua Bliss, 64 GB)',
      image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/2/g/-original-imahbr2cz5apcwze.jpeg?q=70',
      category: 'categoryA',
      price: '7499',
      prevValue: '10999',
      offerPercentage: '31',
      offerPrice: '5650',
      rating: 4,
      reviewCount: '5807',
      ratingCount: '129220',
      description: [
        '4 GB RAM | 64 GB ROM | Expandable Upto 1 TB',
        '17.48 cm (6.88 inch) HD+ Display',
        '50MP Rear Camera | 5MP Front Camera',
        '5160 mAh Battery',
      ]
    },
    {
      id: 2,
      title: 'realme P3x 5G (Midnight Blue, 128 GB)',
      image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/j/n/1/-original-imah9gtmya9qhqse.jpeg?q=70',
      category: 'categoryA',
      price: '12999',
      prevValue: '17999',
      offerPercentage: '27',
      offerPrice: '10100',
      rating: 4.4,
      reviewCount: '837',
      ratingCount: '20449',
      description: [
        '8 GB RAM | 128 GB ROM',
        '17.07 cm (6.72 inch) Full HD Display',
        '50MP Rear Camera | 8MP Front Camera',
        '6000 mAh Battery',
      ]
    }
  ]);

  return (
    <div className="min-h-screen">
      <header className="w-full h-16 bg-blue-500 flex items-center sticky top-0 left-0 z-50">
        <Navbar />
      </header>

      <main className="bg-gray-200 flex gap-2">
        <div><FilterDiv /></div>

        <section className="my-2 basis-3/4 bg-white">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              imageUrl={product.image}
              price={product.price}
              prevPrice={product.prevValue}
              offerPercentage={product.offerPercentage}
              offerPrice={product.offerPrice}
              rating={product.rating}
              ratingCount={product.ratingCount}
              reviewCount={product.reviewCount}
              category={product.category}
              descriptionList={product.description}
            />
            
          ))}
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              imageUrl={product.image}
              price={product.price}
              prevPrice={product.prevValue}
              offerPercentage={product.offerPercentage}
              offerPrice={product.offerPrice}
              rating={product.rating}
              ratingCount={product.ratingCount}
              reviewCount={product.reviewCount}
              category={product.category}
              descriptionList={product.description}
            />
            
          
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;


