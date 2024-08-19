import React from "react";
import { PartialRestaurantData } from "@/types/restaurantTypes";

function Address({ restaurant_add }: PartialRestaurantData) {
  return <div>{restaurant_add}</div>;
}

export default Address;
