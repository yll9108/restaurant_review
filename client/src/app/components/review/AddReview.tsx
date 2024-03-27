import { Button } from "@/components/common/button";
import React from "react";
import {
  BsEmojiAngry,
  BsEmojiAngryFill,
  BsEmojiAstonished,
  BsEmojiAstonishedFill,
  BsEmojiExpressionless,
  BsEmojiExpressionlessFill,
  BsEmojiSmile,
  BsEmojiSmileFill,
  BsEmojiHeartEyes,
  BsEmojiHeartEyesFill,
} from "react-icons/bs";

function AddReview() {
  const options = [];
  for (let i = 1.0; i <= 5.0; i += 0.5) {
    options.push(i);
  }

  // const optionsWithFace =

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
              {options.map((option) => (
                <label key={option}>
                  <input type="radio" name="options" value={option} />
                  {option}
                  {/* {option.face} */}
                </label>
              ))}
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
