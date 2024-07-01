import React from 'react'
import ProductCard from '../ProductCard';
import { useLoaderData } from 'react-router-dom';

function Products() {
    const products = useLoaderData();
  return (
    <div className="grid grid-cols-4 p-10 gap-4">
    {products.map((product) => {
      return <ProductCard key = {product.id} data={product} />;
    })}
  </div>
  )
}

export default Products