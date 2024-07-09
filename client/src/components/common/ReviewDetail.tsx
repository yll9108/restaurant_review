"use client";
import React from "react";
import { Review } from "../../types/types";

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
    <>
      <div className="flex flex-col">
        <div className="flex" key={_id}>
          <p>{review_ratings}</p>
          <p>Time:{review_date}</p>
        </div>
        <h2 className="card-title">{review_title}</h2>
        <p>{review_description}</p>
      </div>
    </>
  );
};

export default React.memo(ReviewDetail);
