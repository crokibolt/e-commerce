import React, { useContext } from "react";
import { CartContext } from "./CartContext";

function CartItem({ id }) {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const item = cart.find((e) => e.id == id);

  return (
    <div className="h-[120px] flex gap-2 justify-evenly items-center border-b border-b-black">
      <div className="h-full w-[120px] overflow-hidden rounded-lg w-fit-content ">
        <img
          src={item.mainImg}
          alt=""
          className="h-[110px] w-[120px] object-cover rounded-lg scale-[1]"
        />
      </div>
      <div className="pt-1">
        <h4 className="text-2xl font-semibold tracking-wider mb-4">
          {item.name}
        </h4>
        <p className="text-lg text-center">
          {" "}
          Quantity:{" "}
          <button
            className="rounded-md border border-red-500 py-0 px-2 text-red-500"
            onClick={() => removeFromCart(item)}
          >
            -
          </button>{" "}
          {item.quantity}{" "}
          <button
            className="rounded-md border border-green-500 py-0 px-2 text-green-500"
            onClick={() => addToCart(item)}
          >
            +
          </button>
        </p>
      </div>
      <div className="w-[90px]">
        <p className="text-2xl font-semibold">
          ${eval(item.price + "*" + item.quantity)}
        </p>
      </div>
    </div>
  );
}

export default CartItem;
