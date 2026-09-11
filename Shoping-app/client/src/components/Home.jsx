import React from 'react'
import Saman from './Saman'

const Home = () => {
  const itemData = [
    { id: 1, title: 'ReactJS', price: 465 },
    { id: 2, title: 'NodeJS', price: 565 },
    { id: 3, title: 'ExpressJS', price: 763 }
  ]

  return (
    <main className="catalog-section">
      <h2 className="catalog-heading">OUR PRODUCTS</h2>

      <div className="product-grid">
        {itemData.map((item) => (
          <Saman
            key={item.id}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
    </main>
  )
}

export default Home