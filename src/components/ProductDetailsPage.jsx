import React from 'react';
import { useParams } from 'react-router-dom';


const ProductDetailPage = () => {
  const { id } = useParams();
  const products = [
    { id: 1, name: 'Product 1', brand: 'Brand A', price: 100, description: 'Description for Product 1', image: 'path_to_image_1' },
    { id: 2, name: 'Product 2', brand: 'Brand B', price: 200, description: 'Description for Product 2', image: 'path_to_image_2' },
    // Agrega más productos de ejemplo aquí
  ];

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail-page">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Brand: {product.brand}</p>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetailPage;
