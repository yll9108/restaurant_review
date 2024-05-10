"use client";

import {
  DummyRestaurantData,
  PartialDummyRestaurantData,
  RestaurantContextType,
} from "@/components/common/types";
import { ReactNode, createContext, useEffect, useState } from "react";

export const RestaurantContext = createContext<RestaurantContextType>({
  restaurantsData: [],
  clickedRestaurant: null,
  setClickedRestaurant: () => {},
});

export function RestaurantContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [restaurantId, setRestaurantId] = useState();

  const [restaurantsData, setRestaurantsData] = useState([]);
  const [clickedRestaurant, setClickedRestaurant] =
    useState<DummyRestaurantData | null>(null);
  useEffect(() => {
    fetch("http://localhost:8080/api/restaurants")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRestaurantsData(data);
      });
  }, []);

  return (
    <RestaurantContext.Provider
      value={{
        restaurantsData,
        clickedRestaurant,
        setClickedRestaurant,
        restaurantId,
        setRestaurantId,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
}
