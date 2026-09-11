import React from 'react'

const Saman = ({ title, price }) => {
  return (
    <div className="product-card">
      <div className="product-icon">✨</div>
      <h3>{title}</h3>
      <div className="product-price">₹{price}</div>
      <button type="button">🛒 ADD TO CART</button>
    </div>
  )
}

export default Saman