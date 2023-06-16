import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);

  const [cartCount, setCartCount] = useState(0);

  const getCartCount = () => {
    let count = 0;
    cart.map((e) => (count += e.quantity));
    return count;
  };

  useEffect(() => {
    let newCount = getCartCount();
    setCartCount(newCount);
  }, [cart]);

  return (
    <div className="h-[72px] w-screen">
      <div className="flex justify-between content-center py-6 px-3 md:px-10">
        <div className="text-xl md:text-3xl font-semibold tracking-widest">
          <Link to="/e-commerce/">CROKSHOP</Link>
        </div>
        <div>
          <div className="flex items-center justify-evenly text-md md:text-xl gap-4 md:gap-8 relative">
            <div className="navbar-item">
              <Link to="/e-commerce/">Homepage</Link>
            </div>
            <div className="navbar-item">
              <Link to="/e-commerce/products">Products</Link>
            </div>
            <div className="navbar-item hidden md:block">
              <Link to="/e-commerce/">Contact us</Link>
            </div>
            <div className="relative navbar-item">
              <Link to="/e-commerce/cart">
                <FontAwesomeIcon icon={faCartShopping} />
                <span className="absolute text-sm top-[-6px] right-[-17px] rounded-xl px-2 bg-green-500">
                  {cartCount}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
