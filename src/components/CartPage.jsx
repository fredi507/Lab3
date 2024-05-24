import React from 'react';

const CartPage = () => {
  const cartItems = [
    { id: 1, name: 'Product 1', brand: 'Brand A', price: 100, quantity: 1 },
    { id: 2, name: 'Product 2', brand: 'Brand B', price: 200, quantity: 2 },
    // Agrega más elementos de ejemplo aquí
  ];

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.brand}</td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
              <td>${item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cart-total">
        <h3>Total: ${totalPrice}</h3>
      </div>
    </div>
  );
};

export default CartPage;
