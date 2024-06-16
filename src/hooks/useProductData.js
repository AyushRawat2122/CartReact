import { useEffect, useState } from "react";
const useProductData = () => {
  const [products, setProducts] = useState([]);
  useEffect(function () {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return products;
};
export default useProductData;
