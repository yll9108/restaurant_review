import React from "react";

interface MapProps {
  map: string;
}

function RestaurantMap({ map }: MapProps) {
  return <img src={map} />;
}

export default RestaurantMap;
