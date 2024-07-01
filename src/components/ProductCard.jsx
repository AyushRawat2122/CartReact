import React from "react";
import { useCart } from "../contexts/CartItem";
function ProductCard(prop) {
  const { addItem } = useCart()
  function handleCart(){
  const data = prop.data;
  data.unit = 1;
  addItem(data);
  }
  return (
    <div className="scroll bg-white rounded-lg shadow-md overflow-hidden align-middle" >
      <img src= {prop.data.image} alt= "" className="w-full h-64 object-contain" />
      <div className="p-4">
        <div className=" h-28 overflow-hidden" >
        <h3 className="text-lg font-medium text-gray-900">{prop.data.title.slice(0 , 25)}</h3>
        <p className="text-base font-normal text-gray-600">{prop.data.description.slice(0,70)} ... <button className="font-semibold underline">show more</button></p>
        </div>
        <p className="text-2xl font-bold text-red-500 mt-2">$ {prop.data.price}</p>
      </div>
      <div className="flex items-center justify-between px-4 py-2 bg-gray-100">
        <button onClick={handleCart}
          className="px-4 py-2 rounded-md text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Add to Cart
        </button>
        <button
          className="px-4 py-2 rounded-md text-base font-medium text-white bg-green-500 hover:bg-green-700"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default ProductCard;