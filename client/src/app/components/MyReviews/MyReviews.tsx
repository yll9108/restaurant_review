"use client";
import React, { useContext, useEffect, useState } from "react";
import ReviewDetail from "@/components/common/ReviewDetail";
import { ReviewsContext } from "@/context/ReviewsContext";
import { UserContext } from "@/context/UserContext";
import axios from "axios";
import { RestaurantContext } from "@/context/RestaurantContext";
import { Review } from "@/types/types";

const MyReviews = () => {
  const { allReviews, setAllReviews } = useContext(ReviewsContext);
  const { user } = useContext(UserContext);
  const { restaurantsData, setRestaurantsData } = useContext(RestaurantContext);

  const [restaurantReviews, setRestaurantReviews] = useState<
    { restaurantName: string; review: Review }[]
  >([]);

  console.log("myReviews", allReviews);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/reviews/${user?._id}`
        );
        console.log("getReviews", res.data);
        setAllReviews(res.data);
      } catch (err) {
        console.log("Error fetching reviews", err);
      }
    };
    if (user?._id) {
      getReviews();
    }
  }, [setAllReviews, user?._id]);

  useEffect(() => {
    const handleReviewChange = async () => {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/restaurants`
      );
      setRestaurantsData(res.data);
    };

    handleReviewChange();
  }, [setRestaurantsData]);

  useEffect(() => {
    if (allReviews.length && restaurantsData.length) {
      const matchedReviews = allReviews
        .map((review) => {
          const restaurant = restaurantsData.find((restaurant) =>
            restaurant.reviewsId.includes(review._id)
          );
          if (restaurant) {
            return {
              restaurantName: restaurant.restaurant_name,
              review,
            };
          }
          return null;
        })
        .filter(Boolean);
      setRestaurantReviews(
        matchedReviews as { restaurantName: string; review: Review }[]
      );
    }
  }, [allReviews, restaurantsData]);

  return (
    <div>
      <h2 className="text-3xl text-center my-8">Review</h2>
      <div className="join join-vertical w-1/2 mx-auto mt-2 block">
        {restaurantReviews.map(({ restaurantName, review }, i) => (
          <div
            key={i}
            className="collapse collapse-arrow join-item border border-base-300"
          >
            <input
              type="radio"
              name="my-accordion-4"
              defaultChecked={i === 0}
            />
            <div className="collapse-title text-xl font-medium bg-primary text-accent">
              {restaurantName}
            </div>
            <div className="collapse-content ">
              <ReviewDetail
                key={review._id}
                _id={review._id}
                review_ratings={review.review_ratings}
                review_date={review.review_date}
                review_title={review.review_title}
                review_description={review.review_description}
                restaurantId={review.restaurantId}
                userId={review.userId}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(MyReviews);
