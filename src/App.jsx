import React, { useEffect, useState } from "react";
import Sidebar from "./components/sidebar";
import Navigation from "./components/navigation";
import Hero from "./components/hero";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Gallery from "./pages/gallery";
import Mail from "./pages/mail";
import Product from "./pages/Product";
import axios from "axios"; // Correct axios import
import Customer from "./pages/Customer";

function App() {
  const [products, setProduct] = useState([]);
  const [customers, setCustomer] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for errors

  // Fetch product data from the API
  const fetcheData = async () => {
    try {
      const [productResponse, customerResponse] = await Promise.all([
        axios.get("http://localhost:8000/api/product_lists/"),
        axios.get("http://localhost:8000/api/customer_lists/"),
      ]);
      setProduct(productResponse?.data);
      setCustomer(customerResponse?.data);
      setLoading(false); // Stop loading once data is fetched
    } catch (err) {
      setError("Error fetching products. Please try again.");
      setLoading(false);
    }
  };

  // Fetch product data when the component mounts
  useEffect(() => {
    fetcheData();
  }, []); // Empty dependency array to run only once after initial render
  const totalPrice = products.reduce((sum, product) => {
    // Ensure product_price is a valid number (convert string to number if needed)
    const price = parseFloat(product.product_price) || 0; // Fallback to 0 if invalid
    return sum + price;
  }, 0);

  return (
    <>
      <Router>
        <Sidebar />
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home customers={customers} products={products} totalPrice={totalPrice} />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/mail" element={<Mail />} />
          <Route
            exact
            path="/product"
            element={<Product products={products} totalPrice={totalPrice} />}
          />
          <Route
            exact
            path="/customer"
            element={<Customer customers={customers} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
