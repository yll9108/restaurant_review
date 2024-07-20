"use client";
import React from "react";
import { PartialRestaurantData } from "@/types/types";
import Ratings from "@/components/common/ratings";

const RestaurantInfo = ({
  restaurant_name,
  restaurant_avg_ratings,
  restaurant_number_reviews,
}: PartialRestaurantData) => {
  return (
    <div className="">
      <h2 className="card-title text-gray-900 text-2xl">{restaurant_name}</h2>
      <div className="flex">
        <Ratings ratings={restaurant_avg_ratings!} />
        <p className="ml-1">{restaurant_avg_ratings}</p>
        <p>
          {restaurant_number_reviews} <span className="ml-1">reviews</span>
        </p>
      </div>
    </div>
  );
};

export default React.memo(RestaurantInfo);
