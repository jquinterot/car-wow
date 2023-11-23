import { Car } from '@/app/types/Car';
import './AddButton.css';

export function AddButton({ car, addToCart, increaseQuantity }: {car: Car; addToCart:(car:Car)=>void; increaseQuantity: () => void;}){
    
const handleAddToCart= (car:Car) => {
    addToCart(car);
    increaseQuantity();
}
    return(
        <button onClick={() => handleAddToCart(car)} id='AddButton'>+ Add To Cart</button>
    )
}