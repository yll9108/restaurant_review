"use client";

import RestaurantWithMap from "@/app/components/detailPage/RestaurantWithMap";
import NoReviews from "@/app/components/review/NoReviews";
import PersonalReview from "@/app/components/review/PersonalReview";
import { RestaurantContext } from "@/context/RestaurantContext";
import { ReviewsContext } from "@/context/ReviewsContext";
import { useParams } from "next/navigation";
import { useContext, useEffect } from "react";
import axios from "axios";

function Page() {
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
          const res = await axios.get(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/restaurants/${restaurantId}`
          );
          setClickedRestaurant(res.data);
        }
      } catch (error) {
        console.log("Error fetching restaurant data", error);
      }
    };
    getData();
  }, [restaurantId, setClickedRestaurant]);

  useEffect(() => {
    const getReviews = async () => {
      try {
        if (restaurantId) {
          const res = await axios.get(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/restaurants/${restaurantId}/review/`
          );
          setAllReviews(res.data);
          setHasReviews(res.data.length > 0);
        }
      } catch (error) {
        console.log("Error fetching reviews:", error);
      }
    };
    getReviews();
  }, [hasReviews, restaurantId, setAllReviews, setHasReviews]);

  return (
    <>
      <div className="flex">
        <div className="w-2/3">
          {hasReviews ? <PersonalReview /> : <NoReviews />}
        </div>

        <div>
          <div className="text-red-800">restaurant {restaurantId}</div>
          {clickedRestaurant && (
            <RestaurantWithMap
              // hasReviews={hasReviews}
              clickedRestaurant={clickedRestaurant}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Page;
