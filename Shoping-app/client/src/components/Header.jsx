import React from 'react'

const Header = () => {
  return (
    <header className="shop-header">
      <div className="browser-topbar">
        <div className="browser-left">
          <span className="nav-icon">←</span>
          <span className="nav-icon">→</span>
          <span className="nav-icon">⟳</span>
        </div>
        <div className="browser-address">127.0.0.1:5173</div>
        <div className="browser-right">
          <span className="nav-icon">★</span>
          <span className="nav-icon">⎈</span>
          <span className="nav-icon">☰</span>
        </div>
      </div>

      <div className="hero-banner">
        <h1>SHOPPING APP</h1>
      </div>
    </header>
  )
}

export default Header