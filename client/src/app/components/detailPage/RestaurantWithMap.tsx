"use client";
import RestaurantInfo from "../restaurant/RestaurantInfo";
import Tags from "../restaurant/Tags";
import Address from "../restaurant/Address";
import RestaurantMap from "./RestaurantMap";
import AddReview from "../review/AddReview";
import { Restaurant, LoginStatus } from "@/types/types";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "@/context/UserContext";
import { ReviewsContext } from "@/context/ReviewsContext";
import { logEvent } from "firebase/analytics";
import { RestaurantContext } from "@/context/RestaurantContext";
import axios from "axios";

// Add hasReviews prop to RestaurantWithMap component
type RestaurantWithMapProps = {
  // hasReviews: boolean;
  clickedRestaurant: Restaurant | null;
};

const RestaurantWithMap = ({
  // hasReviews,
  clickedRestaurant,
}: RestaurantWithMapProps) => {
  const { loginStatus, user } = useContext(UserContext);
  const { hasReviews, allReviews } = useContext(ReviewsContext);
  const { restaurantsData, updatedRestaurantData } =
    useContext(RestaurantContext);

  const [isReview, setIsReview] = useState<Boolean>(false);

  useEffect(() => {
    let letUserHasReviewed = false;
    allReviews.map((review) => {
      if (review.userId === user?._id) {
        letUserHasReviewed = true;
      }
      setIsReview(letUserHasReviewed);
    });
  }, [allReviews, setIsReview, user?._id]);

  useEffect(() => {
    if (clickedRestaurant) {
      const updatedRes = async () => {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/restaurants/${clickedRestaurant._id}`
        );
        if (JSON.stringify(clickedRestaurant) !== JSON.stringify(res.data)) {
          updatedRestaurantData(res.data);
        }
        updatedRes();
      };
    }
  }, [clickedRestaurant, updatedRestaurantData]);

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
                {/* <RestaurantMap mapString={"/mockMap.png"} /> */}
                <Address restaurant_add={clickedRestaurant.restaurant_add} />
                {/* Render button */}

                {loginStatus === LoginStatus.LoggedIn ? (
                  !hasReviews ? (
                    <div className="text-center">
                      <AddReview />
                    </div>
                  ) : !isReview ? (
                    <div className="text-center">
                      <AddReview />
                    </div>
                  ) : (
                    <></>
                  )
                ) : (
                  <></>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(RestaurantWithMap);
