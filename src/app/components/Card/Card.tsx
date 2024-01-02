import { Car } from "@/app/types/Car";
import { CardContent } from "../CardContent/CardContent";
import "./Card.css";
import { Cars } from "@/app/types/Cars";
import { CartCars } from "@/app/types/CartCars";

export function Card({
  cars,
  addToCart,
  cartCars,
  increaseQuantity
}: {
  cars: Cars;
  addToCart: (car: Car) => void;
  cartCars: CartCars;
  increaseQuantity: () => void; 
}) {
  return (
    <div className="card__container pb-10">
      {
      cars?.map((brandCars) => {
        return brandCars.values.map((car) => (
          <CardContent
            carMake={brandCars.make}
            cartCars={cartCars}
            car={car}
            key={car.id}
            addToCart={addToCart}
            increaseQuantity={increaseQuantity}
          />
        ));
      })
      }
    </div>
  );
}