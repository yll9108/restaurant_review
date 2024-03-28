import { Button } from "@/components/common/button";
import React from "react";

function ConfirmationAddReview({ showConfirm }: { showConfirm: boolean }) {
  return (
    <>
      {showConfirm && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Preview</h3>
            <p className="py-4">Will you publish?</p>
            {/* <div className="modal-action"> */}
            <div className="flex gap-2">
              <Button type={3} className="btn flex-1">
                Cancel
              </Button>
              <Button type={0} className="btn flex-1">
                Add
              </Button>
              {/* </div> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ConfirmationAddReview;
