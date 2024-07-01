import NavBar from "./components/NavBar";
import CartItemProvider from "./contexts/CartItem";
import { useState } from "react";
import Products from "./components/products/Products";
import { Outlet } from "react-router-dom";

function App() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  
  function addItem(newItem) {
    const existingItem = items.find((item) => item.id === newItem.id);
    if (!existingItem) {
      setItems([...items, newItem]);
    }
    
  }


  function remItem(itemId) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  }

  function calcTotal(items){
    const newTotal = items.reduce((acc, item) => acc + (parseFloat(item.unit) * parseFloat(item.price)), 0);
    setTotal(newTotal);
  }
  return (
    <CartItemProvider value={{ items, total , addItem, remItem, calcTotal}}>
      <NavBar></NavBar>
      <Outlet/>
    </CartItemProvider>
  );
}

export default App;
