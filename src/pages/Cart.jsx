import React, { useContext } from "react";
import { CartContext } from "../components/CartContext";
import CartItem from "../components/CartItem";

function Cart() {
  const { cart, clearCart } = useContext(CartContext);
  const obtainTotal = () => {
    let total = 0;

    cart.map((e) => (total += eval(e.price + "*" + e.quantity)));

    return total;
  };

  return (
    <div className="h-screen w-screen px-[200px] bg-gray-300 pt-[16px] flex flex-col gap-5">
      {cart.length == 0 ? (
        <p className="text-center text-xl font-semibold text-red-500 mt-[100px]">
          Shopping Cart is empty
        </p>
      ) : (
        <>
          <div className="flex flex-col h-[700px]">
            {cart.map((e) => (
              <CartItem id={e.id} key={e.id} />
            ))}
          </div>
          <div className="flex text-2xl font-bold justify-between border-t-2 border-t-black">
            <p>Total</p>
            <p>${obtainTotal()}</p>
          </div>
          <div className="flex text-lg font-semibold justify-between">
            <button
              className="border border-red-600 p-2 rounded-lg hover:bg-red-300"
              onClick={clearCart}
            >
              Clear Cart
            </button>
            <button
              className="border border-blue-600 p-2 rounded-lg hover:bg-blue-300"
              onClick={() => {}}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
