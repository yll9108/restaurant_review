import React from "react";
import { PartialDummyRestaurantData } from "@/components/common/types";

function Address({ restaurant_add }: PartialDummyRestaurantData) {
  return (
    <>
      <div className="bg-warning">
        <div>{restaurant_add}</div>
      </div>
    </>
  );
}

export default Address;
