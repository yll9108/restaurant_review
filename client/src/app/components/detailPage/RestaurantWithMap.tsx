// RestaurantWithMap.tsx
import React from "react";
import RestaurantInfo from "../restaurant/RestaurantInfo";
import Tags from "../restaurant/Tags";
import Address from "../restaurant/Address";
import RestaurantMap from "./RestaurantMap";
// import { RestaurantMockData, restaurantMockData } from "./mockdata";
import { Button } from "@/components/common/button";
import AddReview from "../review/AddReview";
import { DummyRestaurantData } from "@/components/common/types";

// Add hasReviews prop to RestaurantWithMap component
interface RestaurantWithMapProps {
  hasReviews: boolean;
  clickedRestaurant: DummyRestaurantData | null;
}

function RestaurantWithMap({
  hasReviews,
  clickedRestaurant,
}: RestaurantWithMapProps) {
  return (
    <>
      <div className="bg-red-200">
        <div className="card w-96 bg-base-100 shadow-xl m-4">
          <div className="card-body">
            {clickedRestaurant && (
              <div>
                <RestaurantInfo
                  restaurant_name={clickedRestaurant.restaurant_name}
                  restaurant_avg_ratings={
                    clickedRestaurant.restaurant_avg_ratings
                  }
                  restaurant_number_reviews={
                    clickedRestaurant.restaurant_number_reviews
                  }
                />
                <Tags restaurant_tags={clickedRestaurant.restaurant_tags} />
                <RestaurantMap mapString={"/mockMap.png"} />
                <Address restaurant_add={clickedRestaurant.restaurant_add} />
                {/* Render button only if hasReviews is false */}
                {!hasReviews && (
                  <div className="text-center">
                    <AddReview />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default RestaurantWithMap;
