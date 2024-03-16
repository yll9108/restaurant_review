import { PartialDummyRestaurantData } from "@/components/common/types";
import React from "react";

// interface MapProps {
//   map: string;
// }

function RestaurantMap({ mapString }: PartialDummyRestaurantData) {
  return <img src={mapString} />;
}

export default RestaurantMap;
