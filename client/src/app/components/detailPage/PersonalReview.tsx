import ReviewDetail from "@/components/common/ReviewDetail";
import User from "@/components/common/User";
import React from "react";
import "./custom.css";

function PersonalReview() {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl flex">
        <div className="card-body">
          <User />
          <ReviewDetail />
        </div>
      </div>
    </>
  );
}

// {
//  <div className="card w-96 bg-base-100 shadow-xl">
//   <div className="card-body">
//     <h2 className="card-title">Card title!</h2>
//     <p>If a dog chews shoes whose shoes does he choose?</p>
//     <div className="card-actions justify-end">
//       <button className="btn btn-primary">Buy Now</button>
//     </div>
//   </div>
// </div>
// }

export default PersonalReview;
