import './Cart.css';
import { CartCars } from '../../types/CartCars';
import { Car } from '@/app/types/Car';
import CartList from '@/app/cart/page';

export function Cart({quantity, cartCars, removeFromCart, removeAllFromCart, decreaseQuantity, resetQuantity, changeCartState, cartState }: {quantity:number, cartCars:CartCars, removeFromCart: (car:Car) => void, removeAllFromCart: () => void, resetQuantity: ()=> void, decreaseQuantity: () => void, changeCartState: () => void, cartState:string }) {
  const handleChangeCartState = () => {
    changeCartState()
  }
  return (
    <div className="header__menu">
        <CartList cartCars = {cartCars} removeFromCart={removeFromCart} removeAllFromCart = {removeAllFromCart} decreaseQuantity= {decreaseQuantity} resetQuantity= {resetQuantity} changeCartState={changeCartState} cartState= {cartState}></CartList>
        <button onClick={() => {handleChangeCartState() }} className=' text-white bg-black rounded-3xl  ml-36 w-48 h-8 mt-0 '> Cart</button>
        <label className=' text-white bg-red-600 text-xs rounded-full  text-center w-12 mr-2  mt-4' htmlFor="">{quantity}</label>
       
    </div>
  );
}