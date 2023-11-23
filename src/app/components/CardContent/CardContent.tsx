import { Car } from "@/app/types/Car";
import { AddButton } from "../AddButton/AddButton";
import "./CardContent.css";
import { CartCars } from "@/app/types/CartCars";

export function CardContent({
  car,
  addToCart,
  carMake,
  increaseQuantity
}: {
  car: Car;
  addToCart: (car: Car) => void;
   cartCars: CartCars;
   carMake:string;
   increaseQuantity: () => void;
}) {
  return (
    <div className="card__content">
      <img src={car.url_image[0].url} alt="" />
      <h3>{carMake}</h3>
      <h4>{car.name}</h4>
      <ul>
        <li>${car.price}</li>
        <li>{car.stars}</li>
        <li>{car.country}</li>
      </ul>
      <AddButton car={car} addToCart={addToCart} increaseQuantity={increaseQuantity} />
    </div>
  );
}
