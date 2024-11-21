import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import "./pages.css";

function Product({ products, totalPrice }) {
  const [search, setSearch] = useState("");

  // Filter the products based on the search term
  const filteredProducts = products.filter((product) => {
    return product.product_name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="product-container">
      <div className="searching">
        <input
          type="search"
          className="productSearch"
          placeholder="Enter the Product Name"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

     
       <div className="search_product">
        {search  && (filteredProducts.length === 0 ? (
          <h3>Not Found</h3> 
        ) : (
          
          filteredProducts.map((product) => (
            <div key={product.id} className="product-item">
                <Card style={{ width: "18rem", margin: "10px" }}>
                <Card.Body>
                  <Card.Title>{product.product_name}</Card.Title>
                  <Card.Text>${product.product_price}</Card.Text>
                  <Card.Text>
                    <h7 className="category">Cat({product.category_name})</h7>
                  </Card.Text>

                  <Button
                    variant={product.availability ? "success" : "danger"}
                    disabled={!product.availability}
                  >
                    {product.availability ? "In Stock" : "Out of Stock"}
                  </Button>
                </Card.Body>
                </Card>
              
            </div>
          ))
        ))}
      </div>
      

      <hr />

      
      <div className="card-wrapper">
        {products.length === 0 ? (
          <div>No products available</div>
        ) : (
          products.map((product) => (
            <div key={product.id} className="product-item">
              <Card style={{ width: "18rem", margin: "10px" }}>
                <Card.Body>
                  <Card.Title>{product.product_name}</Card.Title>
                  <Card.Text>${product.product_price}</Card.Text>
                  <Card.Text>
                    <h7 className="category">Cat({product.category_name})</h7>
                  </Card.Text>

                  <Button
                    variant={product.availability ? "success" : "danger"}
                    disabled={!product.availability}
                  >
                    {product.availability ? "In Stock" : "Out of Stock"}
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))
        )}
      </div>

      
    </div>
  );
}

export default Product;
