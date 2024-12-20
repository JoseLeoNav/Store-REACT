import { useRef, useState } from "react";
import Product from "../interfaces/Product";
import { useDispatch } from "react-redux";
import { calculeTotal } from "../store/actions/products";

export default function CartCard(props: Product) {
  const { id, image, title, color, description, price, quantity } = props;
  const refUnits = useRef();
  const dispatch = useDispatch();

  const [units, setUnits] = useState(quantity);

  const manageUnits = () => {
    const newUnits = Number(refUnits.current.value);
    setUnits(newUnits);

    let productsOnCart = JSON.parse(localStorage.getItem("cart"));
    const one = productsOnCart.find((each) => each.id === id);
    if (one) {
      one.units = newUnits;
      localStorage.setItem("cart", JSON.stringify(productsOnCart));
      dispatch(calculeTotal({ products: productsOnCart }));
    }
  };

  return (
    <article className="w-[340px] lg:w-[680px] md:h-[220px] flex justify-between items-center rounded-lg px-[30px] py-[15px] lg:py-[30px] m-[10px] bg-[#f2f2f2]">
      <img
        className="hidden lg:inline-block w-[140px] h-[140px] rounded-lg"
        src={image}
        alt={id}
      />
      <div className="flex flex-col justify-start flex-grow">
        <div className="lg:h-[120px] flex flex-col justify-between flex-grow p-[10px]">
          <span>
            <strong className="block lg:inline-block text-[16px]">
              {title}
            </strong>
            <span className="block lg:inline-block text-[12px]">- {color}</span>
          </span>
          <p className="hidden lg:inline-block w-[340px] truncate text-[12px]">
            {description}
          </p>
          <input
            className="w-[70px] rounded-lg border-1 border-[#eaeaea] p-[5px] pl-[15px] text-[14px]"
            type="number"
            name="quantity"
            ref={refUnits}
            defaultValue={quantity}
            onChange={manageUnits}
            min="1"
            id={id}
          />
        </div>
        <strong className="text-start lg:text-end text-[14px] px-[10px]">
          ${(price * units).toLocaleString()}
        </strong>
      </div>
    </article>
  );
}
