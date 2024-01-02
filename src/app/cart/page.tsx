
"use client";
import { Car } from "@/app/types/Car";
import "./CartList.css";
import { CartCars } from "@/app/types/CartCars";

export default function CartList({ cartCars, removeFromCart, removeAllFromCart, decreaseQuantity, resetQuantity, changeCartState, cartState }: {  removeFromCart: (car: Car) => void; cartCars: CartCars; removeAllFromCart: () => void; decreaseQuantity:() => void; resetQuantity: () => void, changeCartState: ()=> void, cartState:string}) {
  
  const handleRemoveFromCart = (car:Car) => {
    removeFromCart(car);
    decreaseQuantity();
  };

  const handleRemoveAllFromCart = () => {
    changeCartState()
    removeAllFromCart()
    resetQuantity()
  }

  return (
    <div className="table__container bg-gray-800">
      <table className= {`table font-serif rounded-lg text-white bg-gray-800 absolute mt-2  top-24 ${cartState}`}>
        <thead className="bg-gray-900">
          <tr>
            <th>Logo</th>
            <th>Make</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Delete</th>
            <th>Delete All</th>
          </tr>
        </thead>


        <tbody>
          {cartCars?.map((car: Car) => {
            const key = crypto.randomUUID();
            return (
              <tr key={key}>
                <td>Logo</td>
                <td>Ferrari</td>
                <td>{car.name}</td>
                <td>{car.price}</td>
                <td>{car.quantity}</td>

                <td>
                  <button className="rounded-lg bg-red-500 text-white font-serif w-16" onClick={() => {handleRemoveFromCart(car) }}>Delete</button>
                </td>

                <td>
                <button className="rounded-lg bg-red-600 text-white font-serif  w-28 h-6 mt-3 ml-3" onClick={() => {handleRemoveAllFromCart()}}> Remove All</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      
    </div>
  );
}
