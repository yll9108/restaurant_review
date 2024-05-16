import React from "react";
import { PartialRestaurantData } from "@/types/types";

function Address({ restaurant_add }: PartialRestaurantData) {
  return (
    <>
      <div className="bg-warning">
        <div>{restaurant_add}</div>
      </div>
    </>
  );
}

export default Address;
