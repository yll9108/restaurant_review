// RestaurantWithMap.tsx
import React from "react";
import RestaurantInfo from "../restaurant/RestaurantInfo";
import Tags from "../restaurant/Tags";
import Address from "../restaurant/Address";
import RestaurantMap from "./RestaurantMap";
import { RestaurantMockData, restaurantMockData } from "./mockdata";
import { Button } from "@/components/common/button";
import AddReview from "../review/AddReview";

// Add hasReviews prop to RestaurantWithMap component
interface RestaurantWithMapProps {
  hasReviews: boolean;
}

function RestaurantWithMap({ hasReviews }: RestaurantWithMapProps) {
  return (
    <>
      <div className="bg-red-200">
        <div className="card w-96 bg-base-100 shadow-xl m-4">
          <div className="card-body">
            <div>
              <RestaurantInfo name={"test"} ratingNum={5} reviews={120} />
              <Tags tags={"Japanese"} />
              <RestaurantMap mapString={"/mockMap.png"} />
              <Address />
              {/* Render button only if hasReviews is false */}
              {!hasReviews && (
                <div className="text-center">
                  <AddReview />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RestaurantWithMap;
