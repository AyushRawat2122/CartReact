import { createContext, useContext} from "react"
export const CartItem  = createContext(
    {
        items:[],
        total:0,
        addItem:()=>{},
        remItem:()=>{},
        calcTotal:()=>{}
    }
)
const CartItemProvider = CartItem.Provider;
export default CartItemProvider

export function useCart(){
    return useContext(CartItem)
}