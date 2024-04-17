import ReviewDetail from "@/components/common/ReviewDetail";
import User from "@/components/common/User";
import React from "react";
import "./custom.css";
import { Button } from "@/components/common/button";
import { dummyReviewList } from "./dummyReviewList";

function PersonalReview() {
  return (
    <>
      <div className="flex flex-col">
        {dummyReviewList.map((review) => (
          <div key={review.id} className="card bg-base-100 shadow-xl m-5">
            <div className="card-body flexRow">
              <User />
              <ReviewDetail
                key={review.id}
                icon={review.icon}
                rating={review.rating}
                date={review.date}
                title={review.title}
                content={review.content}
              />
            </div>
          </div>
        ))}
        {/* <div className="card bg-base-100 shadow-xl m-5">
          <div className="card-body flexRow">
            <User />
            {dummyReviewList.map((review) => (
              <ReviewDetail
                key={review.id}
                icon={review.icon}
                rating={review.rating}
                date={review.date}
                title={review.title}
                content={review.content}
              />
            ))}
          </div>
        </div> */}
        <div className="text-center">
          <Button type={1}>See more reviews</Button>
        </div>
      </div>
    </>
  );
}

export default PersonalReview;
