import { Button } from "@/components/common/button";
import React, { useState } from "react";
import AddReview from "./AddReview";

function NoReviews() {
  // addReviews set as false, means you don't need to add Reviews now.
  // const [addReviews, setAddReviews] = useState(false);
  // const toggleAddReviews = () => {
  //   setAddReviews(!addReviews);
  //   console.log("setAddReviews", addReviews);
  // };
  return (
    <>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="mb-5">No reviews</div>
        <AddReview />
      </div>
    </>
  );
}

export default NoReviews;
