import { useEffect, useState } from "react";
import { Cars } from "../types/Cars";

export const useCars = () => {
    const [cars, setCars] = useState<Cars>([]);

    useEffect(() => {
        fetch("db/cars_db.json")
        .then((response) => response.json())
        .then((data) => {
            const carsWithQuantity = data.cars;
            setCars(carsWithQuantity)
        });
    }, []);

    return {cars};
}