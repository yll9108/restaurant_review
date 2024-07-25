import React from "react";
import { PartialRestaurantData } from "@/types/types";

function Address({ restaurant_add }: PartialRestaurantData) {
  return <div className="">{restaurant_add}</div>;
}

export default Address;
