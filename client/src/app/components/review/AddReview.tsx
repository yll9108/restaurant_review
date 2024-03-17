import { Button } from "@/components/common/button";
import React from "react";

function AddReview() {
  return (
    <>
      <Button
        type={0}
        onClick={() => {
          if (document) {
            (
              document.getElementById("my_modal_1") as HTMLFormElement
            ).showModal();
          }
        }}
      >
        Add reviews
      </Button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          {/* <div className="modal-action"> */}
          <form method="dialog" className="flex flex-col gap-4">
            {/* if there is a button in form, it will close the modal */}
            <div className="flex">
              <label>
                <input type="radio" name="options" />1
              </label>
              <label>
                <input type="radio" name="options" />2
              </label>
              <label>
                <input type="radio" name="options" />3
              </label>
              <label>
                <input type="radio" name="options" />4
              </label>
            </div>

            <input type="text" className="input" placeholder="Title" />
            <input type="text" className="input" placeholder="Description" />
            <div className="flex">
              <Button type={3} className="btn">
                Cancel
              </Button>
              <Button type={0} className="btn">
                Add
              </Button>
            </div>
          </form>
        </div>
        {/* </div> */}
      </dialog>
    </>
  );
}

export default AddReview;
