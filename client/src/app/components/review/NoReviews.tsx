import { Button } from "@/components/common/button";
import React from "react";

function NoReviews() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="mb-5">No reviews</div>
        <Button type={0}>Add reviews</Button>
      </div>
    </>
  );
}

export default NoReviews;
