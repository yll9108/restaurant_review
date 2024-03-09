import React from "react";

interface RestaurantInfoProps {
  name: string;
  ratingNum: number;
  reviews: number;
}

function RestaurantInfo({ name, ratingNum, reviews }: RestaurantInfoProps) {
  return (
    <>
      {/* <div className="bg-primary">this is res info</div> */}
      <h2 className="card-title bg-slate-400">{name}</h2>
      <div className="flex bg-green-200">
        <p>here is rating icons</p>
        <p>{ratingNum}</p>
        <p>{reviews} reviews</p>
      </div>
    </>
  );
}

export default RestaurantInfo;
