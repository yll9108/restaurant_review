import React from "react";
import { PartialDummyRestaurantData } from "./types";

function Address({ add }: PartialDummyRestaurantData) {
  return (
    <>
      <div className="bg-warning">
        <div>{add}</div>
      </div>
    </>
  );
}

export default Address;
