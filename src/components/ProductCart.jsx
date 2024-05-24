import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h2>{product.name}</h2>
        <p>Brand: {product.brand}</p>
        <p>Category: {product.category}</p>
        <p>Price: ${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
