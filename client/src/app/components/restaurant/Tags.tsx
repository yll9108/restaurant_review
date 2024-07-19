import React from "react";
import { PartialRestaurantData } from "@/types/types";

function Tags({ restaurant_tags }: PartialRestaurantData) {
  return <div>{restaurant_tags}</div>;
}

export default Tags;
