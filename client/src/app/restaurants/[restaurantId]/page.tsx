"use client";

import RestaurantWithMap from "@/app/components/detailPage/RestaurantWithMap";
import NoReviews from "@/app/components/review/NoReviews";
import PersonalReview from "@/app/components/review/PersonalReview";
import { RestaurantContext } from "@/context/RestaurantContext";
import { ReviewsContext } from "@/context/ReviewsContext";
import { useParams } from "next/navigation";
import { useContext, useEffect } from "react";
import axios from "axios";
import React from "react";

const Page = () => {
  const params = useParams();
  const restaurantId = params.restaurantId as string;
  const { clickedRestaurant, setClickedRestaurant, setRestaurantId } =
    useContext(RestaurantContext);

  const { allReviews, setAllReviews, hasReviews, setHasReviews } =
    useContext(ReviewsContext);

  //Check RestaurantId and rest reviews when user go to another restaurant page
  useEffect(() => {
    setRestaurantId(restaurantId);
    setAllReviews([]);
    setHasReviews(false);
  }, [restaurantId, setAllReviews, setHasReviews, setRestaurantId]);

  // create only one function that fetch restaurant data and review data

  useEffect(() => {
    const getData = async () => {
      try {
        if (restaurantId) {
          const restaurantRes = await axios.get(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/restaurants/${restaurantId}`
          );
          setClickedRestaurant(restaurantRes.data);

          const reviewRes = await axios.get(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/restaurants/reviews/${restaurantId}`
          );
          setAllReviews(reviewRes.data);
          setHasReviews(reviewRes.data.length > 0);
        }
      } catch (error) {
        console.log("Error fetching restaurant data", error);
      }
    };
    getData();
  }, [restaurantId, setAllReviews, setClickedRestaurant, setHasReviews]);

  console.log("allReviews", allReviews);

  return (
    <div
      // className={`flex pt-16 bg-accent  ${hasReviews ? "h-screen" : "h-full"}`}
      className="bg-accent pt-16 h-full"
    >
      {/*display left side */}
      <div className="bg-accent">
        <div className="w-2/3">
          {hasReviews ? <PersonalReview /> : <NoReviews />}
        </div>
      </div>
      {/*display right side */}

      {clickedRestaurant && (
        <RestaurantWithMap clickedRestaurant={clickedRestaurant} />
      )}
    </div>
  );
};

export default React.memo(Page);
