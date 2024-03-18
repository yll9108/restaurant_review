import ReviewDetail from "@/components/common/ReviewDetail";
import User from "@/components/common/User";
import React from "react";
import "./custom.css";
import { Button } from "@/components/common/button";

function PersonalReview() {
  return (
    <>
      <div className="flex flex-col">
        <div className="card bg-base-100 shadow-xl m-5">
          <div className="card-body flexRow">
            <User />
            <ReviewDetail />
          </div>
        </div>
        <div className="text-center">
          <Button type={1}>See more reviews</Button>
        </div>
      </div>
    </>
  );
}

export default PersonalReview;
