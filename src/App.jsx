import NavBar from "./components/NavBar";
import CartItemProvider from "./contexts/CartItem";
import { useState } from "react";
import Products from "./components/products/Products";
import { Outlet } from "react-router-dom";

function App() {
  const [items, setItems] = useState([]);


  function addItem(newItem) {
    const existingItem = items.find((item) => item.id === newItem.id);
    if (!existingItem) {
      setItems([...items, newItem]);
    }
    
  }


  function remItem(itemId) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  }


  return (
    <CartItemProvider value={{ items, addItem, remItem }}>
      <NavBar></NavBar>
      <Outlet/>
    </CartItemProvider>
  );
}

export default App;
