import CartCard from "../components/CartCard";
import CartResume from "../components/CartResume";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";

import { useState, useEffect } from "react";

function Cart() {
  const [productsOnCart, setProductsOnCart] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      const products = JSON.parse(localStorage.getItem("cart"));
      setProductsOnCart(products);
    }
  }, []);


  return (
    <>
      <NavBar />
      <Hero first="mi" second="carrito" />
      <main className="w-full flex justify-center items-start p-[20px] space-x-4">
        <div className="flex flex-col space-y-4">
          {productsOnCart.map((each) => (
            <CartCard
              id={each.id}
              image={each.images[0]}
              title={each.title}
              color={each.colors[0]}
              description={each.description}
              price={each.price}
              quantity={each.units}
            />
          ))}
        </div>
        <CartResume />
      </main>
      <Footer />
    </>
  );
}

export default Cart;
