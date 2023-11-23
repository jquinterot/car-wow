import { Car } from "@/app/types/Car";
import "./CartList.css";
import { CartCars } from "@/app/types/CartCars";

export function CartList({ cartCars, removeFromCart, removeAllFromCart, decreaseQuantity, resetQuantity }: {  removeFromCart: (car: Car) => void; cartCars: CartCars; removeAllFromCart: () => void; decreaseQuantity:() => void; resetQuantity: () => void}) {
  
  const handleRemoveFromCart = (car:Car) => {
    removeFromCart(car);
    decreaseQuantity();
  };

  const handleRemoveAllFromCart = () => {
    removeAllFromCart()
    resetQuantity()
  }

  return (
    <div className="table__container">
      <table className="table">
        <thead>
          <tr>
            <th>Logo</th>
            <th>Make</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Delete</th>
            <th>Remove All</th>
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
                  <button onClick={() => {handleRemoveFromCart(car) }}>Delete</button>
                </td>

                <td>
                  <button onClick={() => {handleRemoveAllFromCart()}}> Remove All</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
