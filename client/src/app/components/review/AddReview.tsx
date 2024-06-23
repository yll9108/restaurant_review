import { BtnType, Button } from "@/components/common/button";
import { Input, TextType } from "@/components/common/Input";
import { useRef, useState } from "react";
import {
  BsEmojiAngry,
  BsEmojiAstonished,
  BsEmojiExpressionless,
  BsEmojiSmile,
  BsEmojiHeartEyes,
} from "react-icons/bs";
import ConfirmationAddReview from "./ConfirmationAddReview";

function AddReview() {
  const [showConfirm, setShowConfirm] = useState(false);
  const modalRef = useRef<HTMLDialogElement>(null);

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

  return (
    <>
      <Button
        type={BtnType.submit}
        onClick={() => {
          if (modalRef.current) {
            modalRef.current.showModal();
          }
        }}
      >
        Add reviews
      </Button>
      <dialog className="modal" ref={modalRef}>
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
            <Input textType={TextType.text} placeholder="Title" />
            <textarea
              className="textarea textarea-bordered"
              placeholder="Description"
            ></textarea>
            <div className="flex">
              <Button
                type={BtnType.cancel}
                className="btn"
                onClick={() => setShowConfirm(false)}
              >
                Cancel
              </Button>
              <Button
                type={BtnType.submit}
                className="btn"
                onClick={() => setShowConfirm(true)}
              >
                Add
              </Button>
            </div>
          </form>
        </div>
        {/* </div> */}
      </dialog>
      <ConfirmationAddReview
        showConfirm={showConfirm}
        setShowConfirm={setShowConfirm}
      />
    </>
  );
}

export default AddReview;
