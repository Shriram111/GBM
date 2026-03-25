import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api/axiosConfig"; 
import "../styles/Cart.css";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [isPlacing, setIsPlacing] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
    calculateTotal(savedCart);
  }, []);

  const calculateTotal = (items) => {
    const sum = items.reduce((acc, item) => acc + Number(item.price), 0);
    setTotal(sum);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const handleCheckout = async () => {
    if (cartItems.length === 0) return;
    const userData = JSON.parse(localStorage.getItem("user"));
    if (!userData || !userData.id) {
      alert("Session expired. Please login again. 🔑");
      navigate("/");
      return;
    }

    setIsPlacing(true);
    try {
      const orderPromises = cartItems.map((item) => {
        return API.post("/order/orders", {
          userId: userData.id,
          productId: item.id,
          quantity: 1
        });
      });

      await Promise.all(orderPromises);
      localStorage.removeItem("cart");
      setCartItems([]);
      window.dispatchEvent(new Event("cartUpdated"));
      setIsPlacing(false);
      setOrderSuccess(true);

      setTimeout(() => {
        setOrderSuccess(false);
        navigate("/products");
      }, 3000);
    } catch (error) {
      setIsPlacing(false);
      console.error("Checkout Error:", error);
    }
  };

  return (
    <div className="cart-page neumorphic-theme">
      {orderSuccess && (
        <div className="cool-modal-overlay">
          <div className="cool-modal-content neumorphic-card">
            <div className="cool-icon-anim">🚀</div>
            <h3>Blast Off!</h3>
            <p>Your premium order is confirmed and launching soon.</p>
            <div className="cool-progress-container">
               <div className="cool-progress-bar"></div>
            </div>
          </div>
        </div>
      )}

      <div className="cart-container">
        <header className="cool-cart-header">
          <h1>My <span className="neon-text">Shopping</span> Bag</h1>
          <span className="item-count-badge neumorphic-inset">{cartItems.length} Items</span>
        </header>

        <div className="cart-layout">
          <section className="cart-items-grid">
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <div key={index} className="cool-cart-item neumorphic-card">
                  <div className="item-main-info">
                    <div className="icon-wrapper neumorphic-inset">💎</div>
                    <div>
                        <h3>{item.name}</h3>
                        <p className="item-serial">SN: {Math.random().toString(16).slice(2, 10).toUpperCase()}</p>
                    </div>
                  </div>
                  <div className="item-meta-info">
                    <span className="item-price-cool">₹{item.price.toLocaleString()}</span>
                    <button className="cool-delete-btn neumorphic-btn-danger" onClick={() => removeFromCart(index)} title="Remove">
                      ✕
                    </button>
                  </div>
                </div>
              ))
            ) : (
              !orderSuccess && (
                <div className="cool-empty-state neumorphic-inset">
                  <div className="empty-icon-cool">👻</div>
                  <h2>Bag is Empty</h2>
                  <p>It seems your bag is currently spectral. Let's fix that.</p>
                  <Link to="/products" className="cool-shop-now-btn neumorphic-btn">Explore Items</Link>
                </div>
              )
            )}
          </section>

          <aside className="cool-order-summary neumorphic-card">
            <h2>Order Summary</h2>
            <div className="cool-summary-details">
              <div className="cool-summary-line">
                <span className="label">Subtotal</span>
                <span className="value">₹{total.toLocaleString()}</span>
              </div>
              <div className="cool-summary-line">
                <span className="label">Shipping Cost</span>
                <span className="value free-label">FREE</span>
              </div>
              <div className="cool-summary-line">
                <span className="label">Vat / Tax</span>
                <span className="value">₹0</span>
              </div>
              <div className="cool-divider neumorphic-inset"></div>
              <div className="cool-summary-line total-line">
                <span className="label">Grand Total</span>
                <span className="value">₹{total.toLocaleString()}</span>
              </div>
            </div>
            <button 
              className={`cool-place-order-btn neumorphic-btn-success ${isPlacing ? 'loading' : ''}`}
              onClick={handleCheckout}
              disabled={isPlacing || cartItems.length === 0}
            >
              {isPlacing ? "Processing..." : "Place Order Now"}
            </button>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Cart;