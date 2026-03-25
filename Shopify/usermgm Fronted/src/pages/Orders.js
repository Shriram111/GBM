import React, { useEffect, useState } from "react";
import API from "../api/axiosConfig";
import "../styles/orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const userData = JSON.parse(localStorage.getItem("user"));
        if (!userData || !userData.id) {
          setLoading(false);
          return;
        }

        const res = await API.get(`/order/orders/user/${userData.id}`);
        
        setOrders(res.data.reverse());
        setLoading(false);
      } catch (err) {
        console.error("Error fetching orders:", err);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
        <p>Retrieving your history...</p>
      </div>
    );
  }

  return (
    <div className="orders-page neumorphic-theme">
      <div className="orders-container">
        <header className="orders-header">
          <h1>Purchase <span className="neon-text">History</span></h1>
          <p className="subtitle">Track and manage your premium acquisitions</p>
        </header>

        {orders.length > 0 ? (
          <div className="orders-list">
            {orders.map((order) => (
              <div key={order.id} className="order-card neumorphic-card">
                <div className="order-header">
                  <div className="order-id-section">
                    <span className="label">ORDER ID</span>
                    <span className="value">#ORD-{order.id}</span>
                  </div>
                  <div className="status-badge neumorphic-inset">
                    <span className="dot"></span> Confirmed
                  </div>
                </div>

                <div className="order-body">
                  <div className="product-info">
                    <div className="product-icon neumorphic-inset">📦</div>
                    <div>
                      <h3>{order.productName}</h3>
                      <p className="qty">Quantity: {order.quantity}</p>
                    </div>
                  </div>
                  <div className="price-info">
                    <p className="unit-price">₹{order.price.toLocaleString()}</p>
                    <p className="total-price">₹{order.totalAmount.toLocaleString()}</p>
                  </div>
                </div>

                <div className="order-footer">
                  <span className="order-date">Placed on: {new Date().toLocaleDateString()}</span>
                  <button className="invoice-btn neumorphic-btn">View Invoice</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-orders-state neumorphic-inset">
            <div className="empty-icon">📂</div>
            <h2>No History Found</h2>
            <p>Your orders will appear here once you make a purchase.</p>
            <button 
              className="shop-now-redirect neumorphic-btn" 
              onClick={() => window.location.href='/products'}
            >
              Start Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;