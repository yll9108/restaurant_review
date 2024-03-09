import ReviewDetail from "@/components/common/ReviewDetail";
import User from "@/components/common/User";
import React from "react";
import "./custom.css";

function PersonalReview() {
  return (
    <>
      <div className="card w-3/5 bg-base-100 shadow-xl m-5">
        <div className="card-body flexRow">
          <User />
          <ReviewDetail />
        </div>
      </div>
    </>
  );
}

export default PersonalReview;
