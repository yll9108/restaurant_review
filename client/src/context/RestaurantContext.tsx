"use client";

import {
  DummyRestaurantData,
  PartialDummyRestaurantData,
} from "@/components/common/types";
import { ReactNode, createContext, useEffect, useState } from "react";

export const RestaurantContext = createContext<DummyRestaurantData>(
  {} as DummyRestaurantData
);

export function RestaurantContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [restaurantsData, setRestaurantsData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/api/restaurants")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRestaurantsData(data);
      });
  }, []);

  return (
    <RestaurantContext.Provider value={{ restaurantsData }}>
      {children}
    </RestaurantContext.Provider>
  );
}
