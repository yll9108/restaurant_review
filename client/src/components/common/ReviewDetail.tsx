import React from "react";
import { DummyReviewList } from "./types";

function ReviewDetail({
  id,
  icon,
  rating,
  date,
  title,
  content,
}: DummyReviewList) {
  return (
    <>
      {/* <div className="card-body"> */}
      <div className="flex flex-col">
        <div className="flex" key={id}>
          <p>{icon}</p>
          <p>{rating}</p>
          {/* <p>{date}</p> */}
        </div>
        <h2 className="card-title">{title}</h2>
        <p>{content}</p>
        {/* </div> */}
      </div>
    </>
  );
}

export default ReviewDetail;
