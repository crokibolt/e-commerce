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

function App() {
  return (
    <div className="font-sans">
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
