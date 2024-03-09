import React from "react";
import RestaurantWithMap from "../components/detailPage/RestaurantWithMap";
import PersonalReview from "../components/detailPage/PersonalReview";

function page() {
  return (
    <>
      <div className="flex">
        <PersonalReview />
        <RestaurantWithMap />
      </div>
    </>
  );
}

export default page;
