import React from "react";

function Tags({ tags }: DummyRestaurantData) {
  return (
    <>
      <div className="bg-secondary flex gap-5">
        <div>{tags}</div>
        <div>heart icon</div>
      </div>
    </>
  );
}

export default Tags;
