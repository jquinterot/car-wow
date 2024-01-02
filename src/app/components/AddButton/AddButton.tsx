import { Car } from '@/app/types/Car';
import './AddButton.css';

export function AddButton({ car, addToCart, increaseQuantity }: {car: Car; addToCart:(car:Car)=>void; increaseQuantity: () => void;}){
    
const handleAddToCart= (car:Car) => {
    addToCart(car);
    increaseQuantity();
}
    return(
        <button className='mt-4 rounded-lg bg-green-700 ml mb-2 ml-2 w-52' onClick={() => handleAddToCart(car)} id='AddButton'>+ Add To Cart</button>
    )
}