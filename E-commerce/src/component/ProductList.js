import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';

const ProductList = () => {
  const products = useSelector((state) => state.products);

  return (
    <div style={styles.container}>
      {products && products.map((product) => (
        <Card key={product.id} id={product.id} price={product.price} />
      ))}
    </div>

  );
};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
};

export default ProductList;

