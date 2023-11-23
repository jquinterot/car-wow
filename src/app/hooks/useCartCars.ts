import { useState } from "react";
import { Car } from "../types/Car";
import { CartCars } from "../types/CartCars";

export const useCartCars = () => {
  const [cartCars, setCartCars] = useState<CartCars>([]);

  const addToCart = (car: Car) => {
    const existingCar = cartCars.find((addedCar) => addedCar.id === car.id);

    if (existingCar) {
        const updatedCart = cartCars.map((carToUpdate:Car) =>
            carToUpdate.id === existingCar.id
                ? { ...carToUpdate, quantity: (carToUpdate.quantity) + 1 }
                : carToUpdate
        );

      setCartCars(updatedCart);
    } else 
    {
        const updatedCar = { ...car, quantity: 1 };
        //Use prevState and not new in order to have updated data
        setCartCars((prevCartCars)=>  [...prevCartCars, updatedCar]);
    }
  };

  const removeFromCart = (car: Car) => {
    const existingCar = cartCars.find((addedCar) => addedCar.id === car.id);
    if (existingCar) {
      if (existingCar.quantity === 1) {
        const updatedCart = cartCars.filter((carToRemove) => carToRemove.id !== car.id);
        setCartCars(updatedCart);
      } else {
        const updatedCart = cartCars.map((carToUpdate: Car) =>
          carToUpdate.id === existingCar.id ? { ...carToUpdate, quantity: carToUpdate.quantity - 1 } : carToUpdate
        );
        setCartCars(updatedCart);
      }
    }
  };

  const removeAllFromCart = () => {
    setCartCars([]);
  };

  return { cartCars, addToCart, removeFromCart, removeAllFromCart };
};
