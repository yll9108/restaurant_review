import { BtnType, Button } from "@/components/common/button";
import React from "react";
import { ShowConfirmProps } from "@/types/types";

function ConfirmationAddReview({
  showConfirm,
  setShowConfirm,
}: ShowConfirmProps) {
  return (
    <>
      {showConfirm && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Preview</h3>
            <p className="py-4">Will you publish?</p>
            {/* <div className="modal-action"> */}
            <div className="flex gap-2">
              <Button
                type={BtnType.cancel}
                className="btn flex-1"
                onClick={() => setShowConfirm(false)}
              >
                Cancel
              </Button>
              <Button type={BtnType.submit} className="btn flex-1">
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
