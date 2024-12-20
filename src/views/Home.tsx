import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import Product from "../interfaces/Product";

import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const text = useSelector((store) => store.products.text);
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    axios
      .get("/products.json")
      .then((res) => {
        const filterData = res.data.filter((each) =>
          each.title.toLowerCase().includes(text.toLowerCase())
        );
        setProducts(filterData);
      })
      .catch((err) => console.log(err));
  }, [text]);

  return (
    <>
      <NavBar />
      <Hero first="tecnologia" second="renovada" />
      <main className="w -full flex justify-center items-center pl-[20px] sm:px-0">
        <div
          className="w-[1080px] flex flex-wrap justify-between items-center"
          id="products"
        >
          {products.map((each: Product) => (
            <ProductCard
              key={each.id}
              id={each.id}
              title={each.title}
              price={each.price}
              color={each.colors[0]}
              image={each.images[0]}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
