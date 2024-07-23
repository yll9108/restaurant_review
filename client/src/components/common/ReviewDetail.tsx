"use client";
import React from "react";
import { Review } from "../../types/types";
import Ratings from "./ratings";
// function ReviewDetail({ id, icon, rating, date, title, content }: Review) {
const ReviewDetail = ({
  _id,
  review_ratings,
  review_date,
  review_title,
  review_description,
  restaurantId,
  userId,
}: Review) => {
  console.log("review date", review_date);

  return (
    <div className="flex flex-col ml-2">
      <div className="flex" key={_id}>
        <Ratings ratings={review_ratings} />
        <p className="ml-1">{review_ratings}</p>
        <p className="ml-1">{review_date}</p>
      </div>
      <h2 className="card-title text-2xl">{review_title}</h2>
      <p className="text-lg">{review_description}</p>
    </div>
  );
};

export default React.memo(ReviewDetail);
