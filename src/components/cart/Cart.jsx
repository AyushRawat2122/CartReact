import React, { useEffect, useState } from 'react';
import './Cart.css'
import { useCart } from '../../contexts/CartItem';
function Cart() {

  const {items , addItem , remItem} = useCart();
  // const [unit , setUnit] = useState(1);
  const [total , setTotal] = useState(0);

  console.log(items);
  useEffect(()=>{
    let sum = 0;
    items.map((item)=>{
    sum+=parseFloat(item.price) * parseFloat(item.unit)
    })
    setTotal(sum);
  } , [items])


  return (
<section>
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div class="mx-auto max-w-3xl">
      <header class="text-center">
        <h1 class="text-xl font-bold text-gray-900 sm:text-3xl">Your Cart</h1>
      </header>

      <div class="mt-8">
        <ul class="space-y-4">
          {
            items.map((item)=>{
                const [price , setPrice] = useState(0);
                useEffect(()=>{
                  setPrice(parseFloat(item.price) * parseInt(item.unit));
                },[item.unit])
                return <li class="flex items-center gap-4">
                <img
                  src={item.image}
                  alt=""
                  class="size-16 rounded object-cover"
                />
    
                <div>
                  <h3 class="text-sm text-gray-900">{item.title}</h3>
    
                  <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
                    <div>
                      <dt class="inline">Price: </dt>
                      <dd class="inline">${item.price}</dd>
                    </div>
    
                    <div>
                      <dt class="inline">total:</dt>
                      <dd class="inline">$ {price}</dd>
                    </div>
                  </dl>
                </div>
    
                <div class="flex flex-1 items-center justify-end gap-2">
                  <form>
                    <label for="Line3Qty" class="sr-only"> Quantity </label>
    
                    <input
                      type="number"
                      min="1"
                      max="10"
                      id="Line3Qty"
                      onChange={(e)=>{item.unit = e.target.value ; console.log(item);}}
                      class="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600"
                    />
                  </form>
    
                  <button onClick={()=>{remItem(item.id);}} class="text-gray-600 transition hover:text-red-600">
                    <span class="sr-only">Remove item</span>
    
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-4 w-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </li>;
            })
          }
        </ul>

        <div class="mt-8 flex justify-end border-t border-gray-100 pt-8">
          <div class="w-screen max-w-lg space-y-4">
            <dl class="space-y-0.5 text-sm text-gray-700">
              <div class="flex justify-between">
                <dt>Subtotal</dt>
                <dd>£250</dd>
              </div>

              <div class="flex justify-between">
                <dt>VAT</dt>
                <dd>£25</dd>
              </div>

              <div class="flex justify-between !text-base font-medium">
                <dt>Total</dt>
                <dd>$ {total}</dd>
              </div>
            </dl>

            <div class="flex justify-end">
              <a
                href="#"
                class="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
              >
                Checkout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}

export default Cart;