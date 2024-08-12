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
import { RestaurantContext } from "@/context/RestaurantContext";
import axios from "axios";
import FavButton from "../restaurant/FavButton";
import { BtnType, Button } from "@/components/common/button";
import { useRouter } from "next/navigation";

type RestaurantWithMapProps = {
  clickedRestaurant: Restaurant | null;
};

const RestaurantWithMap = ({ clickedRestaurant }: RestaurantWithMapProps) => {
  const router = useRouter();
  const { loginStatus, user, setUser } = useContext(UserContext);
  const { hasReviews, allReviews } = useContext(ReviewsContext);
  const { restaurantsData, updatedRestaurantData } =
    useContext(RestaurantContext);

  const [isReview, setIsReview] = useState<Boolean>(false);
  const [isFav, setIsFav] = useState<Boolean>(false);

  //Check the user has review
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
      };
      updatedRes();
      // Check if the restaurant is in the user's favorites
      const checkIsFav = user?.user_favorite_restaurant.includes(
        clickedRestaurant._id
      );
      if (checkIsFav) {
        setIsFav(true);
      } else {
        setIsFav(false);
      }
    }
  }, [
    clickedRestaurant,
    updatedRestaurantData,
    user?.user_favorite_restaurant,
  ]);

  console.log("clickedRestaurant", clickedRestaurant);

  //favorite button handler
  const registeredFav = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    if (!clickedRestaurant) return;

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/${user?._id}/favorite`,
        { restaurantId: clickedRestaurant?._id },
        {
          headers: { Accept: "application/json" },
        }
      );
      setUser(response.data);
      setIsFav(!isFav);
    } catch (error) {
      console.error("Error updating favorite restaurant:", error);
    }
  };

  return (
    // <div className="card w-96 bg-base-100 shadow-xl mx-auto mt-5 fixed right-16 top-16">
    // <div className="card bg-base-100 shadow-xl mx-4 my-5 h-48 md:order-2">
    <div
      className={`card bg-base-100 shadow-xl mx-4 my-5 lg:fixed lg:z-40 lg:right-8 ${
        hasReviews ? "h-46" : "h-56"
      }`}
    >
      <div className="card-body p-4">
        {clickedRestaurant && (
          <>
            <RestaurantInfo
              restaurant_name={clickedRestaurant.restaurant_name}
              restaurant_avg_ratings={clickedRestaurant.restaurant_avg_ratings}
              restaurant_number_reviews={
                clickedRestaurant.restaurant_number_reviews
              }
            />
            <Address restaurant_add={clickedRestaurant.restaurant_add} />
            <div className="flex gap-2">
              <Tags restaurant_tags={clickedRestaurant.restaurant_tags} />
              <FavButton onClick={registeredFav} isFav={isFav} />
            </div>
            {/* <RestaurantMap mapString={"/mockMap.png"} /> */}
            {/* Render button */}

            {loginStatus === LoginStatus.LoggedIn ? (
              !hasReviews ? (
                <div className="text-center mt-1 ">
                  <AddReview />
                </div>
              ) : !isReview ? (
                <div className="text-center mt-1">
                  <AddReview />
                </div>
              ) : (
                <></>
              )
            ) : (
              <div className="text-center mt-1">
                <Button
                  type={BtnType.logIn}
                  onClick={() => router.push("/login")}
                  className="btn px-7"
                >
                  Log In
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default React.memo(RestaurantWithMap);
