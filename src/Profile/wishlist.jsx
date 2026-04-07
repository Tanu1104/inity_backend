import React from "react";
import "./order_history.css";

const wishlistItems = [
  {
    id: 1,
    name: "Wireless Neckband",
    category: "neckband",
    originalPrice: 2990,
    discountedPrice: 899,
    discountPercentage: 70,
    rating: 4.5,
    image: "/products/neckband/neckband.jpeg",
  },
  {
    id: 2,
    name: "Bluetooth Speaker",
    category: "speaker",
    originalPrice: 4990,
    discountedPrice: 1499,
    discountPercentage: 70,
    rating: 4.8,
    image: "/products/speaker/speaker.jpeg",
  },
  {
    id: 3,
    name: "Wireless Earbuds",
    category: "earbuds",
    originalPrice: 2990,
    discountedPrice: 1099,
    discountPercentage: 63,
    rating: 4.3,
    image: "/products/earbuds/earbuds.jpeg",
  },
  {
    id: 4,
    name: "Wireless Headphones",
    category: "headphones",
    originalPrice: 4999,
    discountedPrice: 2499,
    discountPercentage: 50,
    rating: 4.6,
    image: "/products/headphones/headphones.jpeg",
  }
];

const Wishlist = () => {
  return (
    <div className="orders-page">
      <div className="wishlist-container">
        <h2 className="orders-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>My Wishlist</h2>
        
        <div className="wishlist-grid">
          {wishlistItems.map((item, index) => (
            <div
              key={item.id}
              className="wishlist-card animate-wishlist-item"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img src={item.image} alt={item.name} className="wishlist-card-image" />
              <div className="wishlist-card-body">
                <h3 className="wishlist-item-name">{item.name}</h3>
                <div className="wishlist-item-prices">
                  <span className="wishlist-discounted-price">₹{item.discountedPrice}</span>
                  <span className="wishlist-original-price">₹{item.originalPrice}</span>
                  <span className="wishlist-discount-percent">{item.discountPercentage}% off</span>
                </div>
                <div className="wishlist-rating">
                  ⭐ {item.rating}
                </div>
                <button className="wishlist-add-to-cart-btn">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
