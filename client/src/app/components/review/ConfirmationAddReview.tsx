import { Button } from "@/components/common/button";
import React from "react";

function ConfirmationAddReview({ showConfirm }: { showConfirm: boolean }) {
  return (
    <>
      {showConfirm && (
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Will you publish your review?</h2>
            <div className="flex gap-2">
              <Button type={3} className="btn flex-1 ">
                Cancel
              </Button>
              <Button type={0} className="btn flex-1">
                Add
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ConfirmationAddReview;
