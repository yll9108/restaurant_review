import { PartialRestaurantData } from "@/types/types";
import React from "react";

// interface MapProps {
//   map: string;
// }

function RestaurantMap({ mapString }: PartialRestaurantData) {
  return <img src={mapString} />;
}

export default RestaurantMap;
