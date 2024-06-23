"use client";

import { Restaurant, RestaurantContextType } from "@/types/types";
import { ReactNode, createContext, useEffect, useState } from "react";
import axios from "axios";

export const RestaurantContext = createContext<RestaurantContextType>(
  {} as RestaurantContextType
);

export function RestaurantContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [restaurantId, setRestaurantId] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [restaurantsData, setRestaurantsData] = useState<Restaurant[]>([]);
  const [clickedRestaurant, setClickedRestaurant] = useState<Restaurant | null>(
    null
  );

  // Homepage, fetch all restaurant data
  useEffect(() => {
    if (searchValue) {
      console.log("search value: ", searchValue);

      axios
        .get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/restaurants/?text=` +
            searchValue
        )
        .then((res) => {
          console.log("result", res.data);
          setRestaurantsData(res.data);
        });
    } else {
      axios
        .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/restaurants`)
        .then((response) => {
          console.log("restaurants context ", response.data);
          setRestaurantsData(response.data);
        });
    }
  }, [searchValue]);
  return (
    <RestaurantContext.Provider
      value={{
        restaurantsData,
        clickedRestaurant,
        setClickedRestaurant,
        restaurantId,
        setRestaurantId,
        searchValue,
        setSearchValue,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
}
