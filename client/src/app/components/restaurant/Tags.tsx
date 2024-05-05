import React from "react";
import { PartialDummyRestaurantData } from "@/components/common/types";

function Tags({ restaurant_tags }: PartialDummyRestaurantData) {
  return (
    <>
      <div className="bg-secondary flex gap-5">
        <div>{restaurant_tags}</div>
        <div>heart icon</div>
      </div>
    </>
  );
}

export default Tags;
