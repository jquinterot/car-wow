"use client";
import { Card} from './components/Card/Card';
import { NavBar } from './components/NavBar/NavBar';
import { CartList } from './components/CartList/CartList';
import { useCars } from './hooks/useCars';
import { useCartCars } from './hooks/useCartCars';
import { useQuantity } from './hooks/useQuantity';

export default function Home() {
  
  const { cars } = useCars();
  const {addToCart, cartCars, removeFromCart, removeAllFromCart} = useCartCars();
  const {quantity, increaseQuantity, decreaseQuantity, resetQuantity} = useQuantity();

  return (
    <main>
      <header>
      <NavBar quantity={quantity}></NavBar>
      </header>

      <div>
        <Card cars={cars} addToCart = {addToCart} cartCars = {cartCars} increaseQuantity={increaseQuantity}/>
      </div>

      <div>
        <CartList cartCars = {cartCars} removeFromCart={removeFromCart} removeAllFromCart = {removeAllFromCart} decreaseQuantity= {decreaseQuantity} resetQuantity= {resetQuantity} ></CartList>
      </div>
    
    </main>
  )
}
