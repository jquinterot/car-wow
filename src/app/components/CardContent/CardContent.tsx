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
    <div className="card__content font-serif bg-gray-950 text-white rounded-md">
      <img src={car.url_image[0].url} alt="" />
      <h3 className="font-extrabold text-center mt-2">{carMake}</h3>
      <h4 className="font-medium text-center"> {car.name}</h4>
      <ul>
        <li className="ml-4">${car.price}</li>
        <li className="ml-4">{car.stars}</li>
        <li className="ml-4">{car.country}</li>
      </ul>
      <AddButton car={car} addToCart={addToCart} increaseQuantity={increaseQuantity} />
    </div>
  );
}
