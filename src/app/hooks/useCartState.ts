import { useState } from "react";


export const useCartState = () => {

    const [cartState, setCartState] = useState('hidden');

    const changeCartState = () => {
        cartState==='hidden' ? setCartState(''): setCartState('hidden')
       return cartState;
    }
    return {changeCartState, cartState};
}