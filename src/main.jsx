import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider , createBrowserRouter } from 'react-router-dom'
import Products from './components/products/Products.jsx'
import Cart from './components/cart/Cart.jsx'
import fetchProducts from './hooks/fetchProducts.js'


const router = createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>,
      children : [
     {  
      loader: fetchProducts,
      path : "/",
      element :<Products/>
     },
     {
      path : "cart",
      element :<Cart/>
     }
      ]
    }
  ]
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
)
