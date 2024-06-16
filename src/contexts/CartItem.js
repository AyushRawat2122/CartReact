import { createContext, useContext} from "react"
export const CartItem  = createContext(
    {
        items:[],
        addItem:()=>{},
        remItem:()=>{}
    }
)
const CartItemProvider = CartItem.Provider;
export default CartItemProvider

export function useCart(){
    return useContext(CartItem)
}