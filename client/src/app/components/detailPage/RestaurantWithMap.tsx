"use client";
import RestaurantInfo from "../restaurant/RestaurantInfo";
import Tags from "../restaurant/Tags";
import Address from "../restaurant/Address";
import RestaurantMap from "./RestaurantMap";
import AddReview from "../review/AddReview";
import { Restaurant } from "@/types/types";
import { useContext } from "react";
import { UserContext } from "@/context/UserContext";
import { LoginStatus } from "@/types/types";
// Add hasReviews prop to RestaurantWithMap component
type RestaurantWithMapProps = {
  hasReviews: boolean;
  clickedRestaurant: Restaurant | null;
};

function RestaurantWithMap({
  hasReviews,
  clickedRestaurant,
}: RestaurantWithMapProps) {
  const { loginStatus } = useContext(UserContext);
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
                    {loginStatus === LoginStatus.LoggedIn ? (
                      <AddReview />
                    ) : (
                      <></>
                    )}
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
