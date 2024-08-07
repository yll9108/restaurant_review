"use client";
import React, { ReactNode, useState } from "react";
import { useParams } from "next/navigation";
import { Review } from "../../types/types";
import Ratings from "./ratings";
import {
  BsEmojiAngry,
  BsEmojiAstonished,
  BsEmojiExpressionless,
  BsEmojiSmile,
  BsEmojiHeartEyes,
} from "react-icons/bs";

//Show icons
const getIcon = (rating: number): ReactNode => {
  if (rating === 1 || rating === 1.5) {
    return <BsEmojiAngry className="fill-primary w-6" />;
  } else if (rating === 2.0 || rating === 2.5) {
    return <BsEmojiAstonished className="fill-primary w-6" />;
  } else if (rating === 3.0 || rating === 3.5) {
    return <BsEmojiExpressionless className="fill-primary w-6" />;
  } else if (rating === 4.0 || rating === 4.5) {
    return <BsEmojiSmile className="fill-primary w-6" />;
  } else {
    return <BsEmojiHeartEyes className="fill-primary w-6" />;
  }
};

const ReviewDetail = ({
  _id,
  review_ratings,
  review_date,
  review_title,
  review_description,
  restaurantId,
  userId,
}: Review) => {
  const params = useParams();
  const detailPageParams = params.restaurantId as string;

  const reviewIcon = getIcon(review_ratings);

  const reviewRating = review_ratings.toFixed(1);

  return (
    <div className="flex flex-col ml-2 pt-4">
      <div className="flex w-46 items-center" key={_id}>
        <div>{_id}</div>
        {detailPageParams ? (
          <div>{reviewIcon}</div>
        ) : (
          <Ratings ratings={review_ratings} />
        )}
        <p className="w-1">{reviewRating}</p>
        <p className={`w-36 ${detailPageParams ? "" : "ml-5"}`}>
          {review_date}
        </p>
      </div>
      <h2 className="card-title text-2xl">{review_title}</h2>
      <p className="text-lg">{review_description}</p>
    </div>
  );
};

export default React.memo(ReviewDetail);
