import { useEffect, useState } from "react";
import useHttp from "../hooks/useHttp.js";
import MealItem from "./MealItem.jsx";
import Error from "./Error.jsx";

const requestConfig = {};

export default function Meals() {
  const [dots, setDots] = useState(".");
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots.length < 3 ? prevDots + "." : "."));
    }, 400);

    return () => clearInterval(interval);
  }, []);

  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp(
    "https://food-ordering-app-1-hh7u.onrender.com/meals",
    requestConfig,
    [],
  );

  if (isLoading) {
    return (
      <p className="center">
        Fetching meals
        <span
          style={{ display: "inline-block", width: "20px", textAlign: "left" }}
        >
          {dots}
        </span>
      </p>
    );
  }

  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }

  return (
    <ul id="meals">
      {loadedMeals.map(({ id, name, price, description, image }) => {
        return (
          <MealItem
            key={id}
            id={id}
            name={name}
            price={price}
            description={description}
            image={image}
          />
        );
      })}
    </ul>
  );
}
