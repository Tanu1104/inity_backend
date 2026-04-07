import React, { useState } from "react";
import "./order_history.css";

const orders = [
  {
    id: 1,
    name: "Wireless Earbuds",
    category: "earbuds",
    price: 1000,
    status: "Delivered",
    date: "Sep 30, 2025",
    image: "/products/earbuds/earbuds.jpeg",
  },
  {
    id: 2,
    name: "Headphones",
    category: "headphones",
    price: 2500,
    status: "Delivered",
    date: "Sep 22, 2025",
    image: "/products/headphones/headphones.jpeg",
  },
  {
    id: 3,
    name: "Smartwatch",
    category: "smartwatch",
    price: 4599,
    status: "Refund Completed",
    date: "Jan 15, 2026",
    image: "/products/smartwatch/smartwatch.jpeg",
    refundMessage: "Refund of ₹4599 has been credited to your original payment method."
  },
];

const TrackingModal = ({ isOpen, onClose }) => {
  const [trackingId, setTrackingId] = useState("");
  const [error, setError] = useState("");

  const handleTrackingIdChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Only allow digits
    if (value.length <= 15) {
      setTrackingId(value);
      setError("");
    } else {
      setError("Tracking ID cannot exceed 15 digits");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (trackingId.trim() === "") {
      setError("Please enter a tracking ID");
      return;
    }
    // Handle tracking submission (e.g., API call)
    console.log("Tracking ID submitted:", trackingId);
    alert(`Tracking your order with ID: ${trackingId}`);
    setTrackingId("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="tracking-modal-overlay" onClick={onClose}>
      <div className="tracking-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Track Your Order</h2>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="trackingId">Tracking ID Number</label>
            <input
              type="text"
              id="trackingId"
              value={trackingId}
              onChange={handleTrackingIdChange}
              placeholder="Enter tracking ID (max 15 digits)"
              maxLength="15"
              className="tracking-input"
            />
            <span className="digit-counter">{trackingId.length}/15</span>
            {error && <span className="error-message">{error}</span>}
          </div>
          <div className="modal-buttons">
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="submit-btn">
              Track Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const OrderHistory = () => {
  const [showTrackingModal, setShowTrackingModal] = useState(false);

  return (
    <div className="orders-page">
      <div className="orders-container">

        {/* ===== SIDEBAR (NO NEW FILE) ===== */}
        <aside className="orders-sidebar animate-slide-in">
          <h2 className="sidebar-title">Filters</h2>

          <div className="sidebar-section">
            <h4>ORDER STATUS</h4>
            <label><input type="checkbox" /> On the way</label>
            <label><input type="checkbox" /> Delivered</label>
            <label><input type="checkbox" /> Cancelled</label>
            <label><input type="checkbox" /> Returned</label>
          </div>

          <div className="sidebar-section">
            <h4>ORDER TIME</h4>
            <label><input type="checkbox" /> Last 30 days</label>
            <label><input type="checkbox" /> 2024</label>
            <label><input type="checkbox" /> 2023</label>
            <label><input type="checkbox" /> Older</label>
          </div>
        </aside>

        {/* ===== ORDERS LIST ===== */}
        <div className="orders-content">
          <header>
            <h2 className="orders-title">Order History</h2>
            <div className="search-bar">
              <input type="text" placeholder="Search all orders" />
              <button>Search</button>
            </div>
          </header>

          {orders.map((order, index) => (
            <div
              key={order.id}
              className="order-card animate-order-card"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <img src={order.image} alt={order.name} />

              <div className="order-info">
                <h3>{order.name}</h3>
                <p className="category">{order.category}</p>
                <p className="price">₹{order.price}</p>
                {order.status === 'Refund Completed' && (
                  <p className="refund-message">{order.refundMessage}</p>
                )}
              </div>

              <div className="order-status">
                <div>
                  <span className={`status-dot ${order.status === 'Refund Completed' ? 'status-refund' : ''}`} />
                  <p className={`status-text ${order.status === 'Refund Completed' ? 'status-refund-text' : ''}`}>{order.status}</p>
                </div>
                <span className="date">{order.date}</span>
                <div className="buttons">
                  {order.status !== 'Refund Completed' && (
                    <button className="track-button" onClick={() => setShowTrackingModal(true)}>Track Order</button>
                  )}
                  <button className="rate-button">⭐ Rate & Review</button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <TrackingModal isOpen={showTrackingModal} onClose={() => setShowTrackingModal(false)} />
    </div>
  );
};

export default OrderHistory;
