import React from 'react'
import ProductCard from '../ProductCard';
import useProductData from "/src/hooks/useProductData";

function Products() {
    const products = useProductData();
  return (
    <div className="grid grid-cols-4 p-10 gap-4">
    {products.map((product) => {
      return <ProductCard key = {product.id} data={product} />;
    })}
  </div>
  )
}

export default Products