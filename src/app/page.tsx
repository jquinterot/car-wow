"use client";
import { Card} from './components/Card/Card';
import { NavBar } from './components/NavBar/NavBar';
import { useCars } from './hooks/useCars';
import { useCartCars } from './hooks/useCartCars';
import { useCartState } from './hooks/useCartState';
import { useQuantity } from './hooks/useQuantity';

export default function Home() {
  
  const { cars } = useCars();
  const {addToCart, cartCars, removeFromCart, removeAllFromCart} = useCartCars();
  const {quantity, increaseQuantity, decreaseQuantity, resetQuantity} = useQuantity();
  const {changeCartState, cartState} = useCartState();

  return (
    <main>
      <header>
      <NavBar quantity={quantity} removeFromCart={removeFromCart} removeAllFromCart= {removeAllFromCart} decreaseQuantity= {decreaseQuantity} resetQuantity= {resetQuantity} cartCars= {cartCars} changeCartState = {changeCartState} cartState={cartState}></NavBar>
      </header>

      <div className='bg-gray-800'>
        <Card cars={cars} addToCart = {addToCart} cartCars = {cartCars} increaseQuantity={increaseQuantity}/>
      </div>
    </main>
  )
}
