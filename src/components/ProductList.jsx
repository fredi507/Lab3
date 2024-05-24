import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product">
          <img src={product.image} alt={product.name} />
          <div className="product-details">
            <h3>{product.name}</h3>
            <p>{product.brand}</p>
            <p>{product.category}</p>
            <p>${product.price}</p>
            <div className="product-actions">
              <button className="details-btn">Detalles</button>
              <button className="add-to-cart-btn">
                <img src="url_del_icono_de_carrito" alt="Añadir al carrito" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

