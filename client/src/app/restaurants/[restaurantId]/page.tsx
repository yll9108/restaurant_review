"use client";

import RestaurantWithMap from "@/app/components/detailPage/RestaurantWithMap";
import NoReviews from "@/app/components/review/NoReviews";
import PersonalReview from "@/app/components/review/PersonalReview";
import { RestaurantContext } from "@/context/RestaurantContext";
import { ReviewsContext } from "@/context/ReviewsContext";
import { Review } from "@/types/types";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

function Page() {
  const params = useParams();
  const restaurantId = params.restaurantId as string;
  const { clickedRestaurant, setClickedRestaurant, setRestaurantId } =
    useContext(RestaurantContext);

  const { allReviews, setAllReviews, hasReviews, setHasReviews } =
    useContext(ReviewsContext);
  // const [allReviews, setAllReviews] = useState<Review[]>([]);
  // const [hasReviews, setHasReviews] = useState<boolean>(false);
  console.log("hasReviews3???", hasReviews);

  useEffect(() => {
    setRestaurantId(restaurantId);
  }, [restaurantId, setRestaurantId]);

  // create only one function that fetch restaurant data and review data

  useEffect(() => {
    console.log("here1");
    // console.log("hasReviews0???", hasReviews);
    const getData = async () => {
      try {
        if (restaurantId) {
          await axios
            .get(
              `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/restaurants/${restaurantId}`
            )
            .then((res) => {
              console.log("here2");

              // console.log("1111", res.data);
              // setHasReviews(false);
              setClickedRestaurant(res.data);
              // console.log("hasReviews1???", hasReviews);
            });
          // console.log("here", restaurantId);

          // await axios
          //   .get(
          //     `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/restaurants/${restaurantId}/review/`
          //   )
          //   .then((res) => {
          //     console.log("here3");

          //     console.log("2222", res.data);
          //     setAllReviews(res.data);
          //     if (res.data.length > 0) {
          //       setHasReviews(true);
          //     }
          //     console.log("hasReviews2???", hasReviews);
          //   });
        }
      } catch (error) {
        console.log("error", error);
      }
    };
    getData();
  }, [
    // hasReviews,
    restaurantId,
    setClickedRestaurant,
    // setAllReviews,
    // setHasReviews,
  ]);

  useEffect(() => {
    const getReviews = async () => {
      if (restaurantId) {
        try {
          await axios
            .get(
              `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/restaurants/${restaurantId}/review/`
            )
            .then((res) => {
              console.log("here3");

              console.log("2222", res.data);
              // setReviews(res.data);
              setAllReviews(res.data);
              if (res.data.length > 0) {
                setHasReviews(true);
              }
              console.log("hasReviews2???", hasReviews);
            });
        } catch (error) {
          console.log("Error fetching reviews:", error);
        }
      }
    };
    getReviews();
  }, [hasReviews, restaurantId, setHasReviews]);

  console.log("detail page", hasReviews);
  console.log("allReviews", allReviews);

  return (
    <>
      <div className="flex">
        <div className="w-2/3">
          {hasReviews ? (
            <PersonalReview allReviews={allReviews} />
          ) : (
            <NoReviews />
          )}
        </div>

        <div>
          <div className="text-red-800">restaurant {restaurantId}</div>
          {clickedRestaurant && (
            <RestaurantWithMap
              hasReviews={hasReviews}
              clickedRestaurant={clickedRestaurant}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Page;
