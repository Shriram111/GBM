import React, { useState, useEffect } from "react";
import API from "../api/axiosConfig";
import "../styles/product.css";

function Product() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showCartSuccess, setShowCartSuccess] = useState(false);
  const [addedItem, setAddedItem] = useState("");

  const productImages = {
    Laptop: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    Smartphone: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    Headphones: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    Keyboard: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae",
    Mouse: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7",
    Monitor: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc",
    Printer: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7",
    Tablet: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
    "External Hard Drive": "https://images.unsplash.com/photo-1587202372775-e229f172b9d7",
    Webcam: "https://images.unsplash.com/photo-1623949556303-b0d17d198863"
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await API.get("/product/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleAddToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    existingCart.push(product);

    localStorage.setItem("cart", JSON.stringify(existingCart));

    setAddedItem(product.name);
    setShowCartSuccess(true);
    
    window.dispatchEvent(new Event("cartUpdated"));

    setTimeout(() => {
      setShowCartSuccess(false);
    }, 2000);
  };

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-page">
      {showCartSuccess && (
        <div className="cart-popup-overlay">
          <div className="cart-popup-content">
            <div className="success-icon">🛒</div>
            <h3>Added to Cart!</h3>
            <p><strong>{addedItem}</strong> has been added successfully.</p>
          </div>
        </div>
      )}

      <div className="product-header">
        <h1>Explore <span className="highlight">Infinite</span> <br /> with <span className="bold-white">Ordera</span></h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-btn">Search</button>
        </div>
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <span className="category-tag">Tech</span>
              <img src={productImages[product.name] || "https://images.unsplash.com/photo-1523275335684-37898b6baf30"} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="price">₹{product.price}</p>
              <p className="desc">{product.description}</p>
              <button className="add-to-cart" onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;