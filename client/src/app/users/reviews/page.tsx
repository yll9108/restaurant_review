"use client";

import ReviewDetail from "@/components/common/ReviewDetail";

export default function MyReviews() {
  return (
    <div className="join join-vertical w-full">
      <div className="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="my-accordion-4" defaultChecked />
        <div className="collapse-title text-xl font-medium bg-primary text-accent">
          Saku
        </div>
        <div className="collapse-content">
          <ReviewDetail />
        </div>
      </div>
      <div className="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-xl font-medium bg-primary text-accent">
          Haruua
        </div>
        <div className="collapse-content">
          <ReviewDetail />
        </div>
      </div>
      <div className="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-xl font-medium bg-primary text-accent">
          The Old Spaghetti Factory
        </div>
        <div className="collapse-content">
          <ReviewDetail />
        </div>
      </div>
    </div>
  );
}
