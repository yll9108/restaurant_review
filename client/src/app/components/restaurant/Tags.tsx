import React from "react";
import { PartialRestaurantData } from "@/types/restaurantTypes";

const Tags = ({ restaurant_tags }: PartialRestaurantData) => {
  return (
    <span className="text-primary border-primary border-2 rounded-2xl px-2">
      {restaurant_tags}
    </span>
  );
};

export default Tags;
