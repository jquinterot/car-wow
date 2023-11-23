import { useState } from "react";

export const useQuantity = () => {

    const [quantity, setQuantity] = useState(0);

    const increaseQuantity = () => {
       setQuantity(quantity+1);
       return quantity;
    }

    const decreaseQuantity = () => {
      quantity-1 <= 0 ?  setQuantity(0):  setQuantity(quantity-1);
       
     return quantity
    }

    const resetQuantity = () => {
        setQuantity(0);
    }

    return {increaseQuantity, decreaseQuantity,  quantity, resetQuantity};
}