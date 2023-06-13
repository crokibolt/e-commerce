import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import Product from "./pages/Product";
import ScrollToTop from "./components/ScrollToTop";
import { CartContext } from "./components/CartContext";
import { useEffect, useState } from "react";

function App() {
  const localCart = JSON.parse(localStorage.getItem("cart"));
  const [cart, setCart] = useState(localCart ? localCart : []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    const itemToAdd = { ...item, quantity: 1 };

    setCart((prevCart) => {
      const newCart = [...prevCart];
      const itemInCart = newCart.find((e) => e.id === itemToAdd.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        newCart.push(itemToAdd);
      }

      return newCart;
    });
  };

  const removeFromCart = (item) => {
    setCart((prevCart) => {
      let newCart = [...prevCart];
      const itemToRemove = newCart.find((e) => e.id == item.id);

      if (itemToRemove.quantity > 1) {
        itemToRemove.quantity--;
      } else {
        newCart = newCart.filter((e) => e.id != itemToRemove.id);
      }

      return newCart;
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="font-sans">
      <BrowserRouter>
        <CartContext.Provider
          value={{ cart, addToCart, removeFromCart, clearCart }}
        >
          <ScrollToTop>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<Product />} />
            </Routes>
            <Footer />
          </ScrollToTop>
        </CartContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
