import React from "react";
import { PartialDummyRestaurantData } from "./types";

function Tags({ tags }: PartialDummyRestaurantData) {
  return (
    <>
      <div className="bg-secondary flex gap-5">
        <div>{tags}</div>
        <div>heart icon</div>
      </div>
    </>
  );
}

export default Tags;
