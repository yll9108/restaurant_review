import { Button } from "@/components/common/button";
import React, { useRef, useState } from "react";
import {
  BsEmojiAngry,
  BsEmojiAstonished,
  BsEmojiExpressionless,
  BsEmojiSmile,
  BsEmojiHeartEyes,
} from "react-icons/bs";
import ConfirmationAddReview from "./ConfirmationAddReview";

function AddReview() {
  // useRef stores a reference to an element in the DOM
  // starting without any element
  const addReviewModal = useRef<HTMLDialogElement>(null);

  // syntax to access .current
  const openAddReviewModal = () => {
    console.log("addReviewModal", addReviewModal);

    if (addReviewModal.current) {
      addReviewModal.current.showModal();
    }
  };

  const closeReviewModal = () => {
    console.log("closeReviewModal", addReviewModal.current);
    setShowConfirm(!showConfirm);
  };

  const [showConfirm, setShowConfirm] = useState(false);

  const handleConfirm = () => {
    setShowConfirm(!showConfirm);
    console.log(showConfirm);
  };

  const options = [];
  for (let i = 1.0; i <= 5.0; i += 0.5) {
    let face;
    if (i === 1.0 || i === 1.5) {
      face = <BsEmojiAngry />;
    } else if (i === 2.0 || i === 2.5) {
      face = <BsEmojiAstonished />;
    } else if (i === 3.0 || i === 3.5) {
      face = <BsEmojiExpressionless />;
    } else if (i === 4.0 || i === 4.5) {
      face = <BsEmojiSmile />;
    } else {
      face = <BsEmojiHeartEyes />;
    }
    options.push({ num: i, face });
  }

  // write a function to post review to the backend and pass this function to confirmation
  // call it when user click add in confirmation add btn

  return (
    <>
      <Button type={0} onClick={openAddReviewModal}>
        Add reviews
      </Button>
      {/* the ref of this dialog is the reference of addReviewModal */}
      <dialog id="my_modal_1" ref={addReviewModal} className="modal">
        <div className="modal-box">
          {/* <div className="modal-action"> */}
          <form method="dialog" className="flex flex-col gap-4">
            {/* if there is a button in form, it will close the modal */}
            <div className="bg-red-300 flex">
              {options.map((option) => (
                <label key={option.num}>
                  <input type="radio" name="options" value={option.num} />
                  {option.face}
                  {option.num}
                </label>
              ))}
            </div>

            <input type="text" className="input" placeholder="Title" />
            <input type="text" className="input" placeholder="Description" />
            <div className="flex">
              <Button type={3} className="btn">
                Cancel
              </Button>
              <Button type={0} className="btn" onClick={() => handleConfirm()}>
                Add
              </Button>
            </div>
          </form>
        </div>
        {/* </div> */}
      </dialog>
      <ConfirmationAddReview
        showConfirm={showConfirm}
        closeReviewModal={closeReviewModal}
      />
    </>
  );
}

export default AddReview;
