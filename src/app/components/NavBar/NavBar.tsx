import { Car } from '@/app/types/Car';
import { Cart } from '../Cart/Cart';
import { SearchBar } from '../SearchBar/SearchBar';
import './NavBar.css';
import { CartCars } from '@/app/types/CartCars';

export function NavBar({quantity, cartCars, removeFromCart, removeAllFromCart, decreaseQuantity, resetQuantity, changeCartState, cartState}: {quantity:number, cartCars:CartCars, removeFromCart: (car: Car) => void, removeAllFromCart: () => void, resetQuantity: ()=> void, decreaseQuantity: () => void, changeCartState:()=> void, cartState:string }) {
  return (
    <nav className="flex bg-gray-800 px-9 sm:px-12 md:px-48 xl:px-72 space-x-5 pt-12">
      
      <div className=" text-white font-sans font-bold xl:text-4xl  md:text-2xl text-lg  min-w-max w-20 mr-14">
        <h3>Car Wow</h3>
      </div>

     <SearchBar></SearchBar>

     <Cart quantity={quantity} removeFromCart={removeFromCart} removeAllFromCart= {removeAllFromCart} decreaseQuantity= {decreaseQuantity} resetQuantity= {resetQuantity} cartCars= {cartCars} cartState={cartState}  changeCartState = {changeCartState}/>

    </nav>
  );
}
