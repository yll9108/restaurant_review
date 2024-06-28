"use client";
import { useState, useContext, forwardRef, RefObject } from "react";
import { UserContext } from "@/context/UserContext";
import { ReviewsContext } from "@/context/ReviewsContext";
import { BtnType, Button } from "@/components/common/button";

import { NewReview, InitialReviewStateProps } from "@/types/types";
// import ConfirmationAddReview from "./ConfirmationAddReview";
import { useParams, useRouter } from "next/navigation";
import moment from "moment";
import ReviewInput from "./ReviewInput";
import axios from "axios";
interface AddReviewModalProps {
  modalRef: RefObject<HTMLDialogElement>;
}

const AddReviewModal = forwardRef<HTMLDialogElement, AddReviewModalProps>(
  ({ modalRef }, ref) => {
    const [showConfirm, setShowConfirm] = useState<boolean>(false);
    const [reviewTitle, setReviewTitle] = useState("");
    const [reviewDesc, setReviewDesc] = useState("");
    const [reviewRating, setReviewRating] = useState(5);

    const { user } = useContext(UserContext);
    const { setReviews } = useContext(ReviewsContext);

    const reviewRouter = useRouter();

    //Get restaurant ID
    const reviewParams = useParams();
    const restaurantId = reviewParams.restaurantId as string;

    //Get postedTime
    const postedTime = moment().calendar({
      sameDay: "[Today] dddd",
      lastDay: "[Yesterday]",
      lastWeek: "[last] dddd",
      lastMonth: "[last] mmmm",
      sameElse: "MM/DD/YYYY",
    });

    const AddedReview = (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      event.preventDefault();

      if (!user?._id && !reviewParams) {
        console.log("error add review");
      } else {
        if (!reviewTitle) {
          alert("Please enter a title");
          return;
        } else if (!reviewDesc) {
          alert("Please enter a description");
          return;
        } else {
          console.log("reviewTitle2", reviewTitle);
          console.log("reviewDescription2", reviewDesc);
          console.log("reviewRating2", reviewRating);

          setShowConfirm(true);
        }
        // if (modalRef.current) {
        //   modalRef.current.showModal();
        // }
      }
    };

    // Handle cancel button
    const closedModal = (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      event.preventDefault();
      if (modalRef.current) {
        modalRef.current.close();
      }
      setReviewTitle("");
      setReviewDesc("");
      setReviewRating(5);

      setShowConfirm(false);
    };

    const submittedReviewState = async (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      event.preventDefault();
      console.log("submit title", reviewTitle);
      console.log("submit desc", reviewDesc);
      console.log("submit rating", reviewRating);

      const formData = new FormData();

      if (user?._id) {
        formData.append("review_ratings", reviewRating.toString());
        formData.append("review_date", postedTime);
        formData.append("review_title", reviewTitle);
        formData.append("review_description", reviewDesc);
        formData.append("restaurantId", restaurantId);
        formData.append("userId", user?._id);
      }

      await axios
        .post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/restaurants/${restaurantId}/review/addReview`,
          formData,
          { headers: { "Content-Type": "application/json" } }
        )
        .then((res) => {
          console.log("posted review", res.data);
          setReviews(res.data);
          reviewRouter.push(`/restaurants/${restaurantId}`);
        });
    };

    return (
      <>
        <dialog className="modal" ref={ref || modalRef}>
          <div className="modal-box">
            {/* <div className="modal-action"> */}
            {!showConfirm && (
              <ReviewInput
                reviewTitle={reviewTitle}
                setReviewTitle={setReviewTitle}
                reviewDesc={reviewDesc}
                setReviewDesc={setReviewDesc}
                reviewRating={reviewRating}
                setReviewRating={setReviewRating}
              />
            )}
            {showConfirm && (
              <div>
                <h3 className="font-bold text-lg">Preview</h3>
                <p>{reviewRating}</p>
                <p>{reviewTitle}</p>
                <p>{reviewDesc}</p>
                <p className="py-4">Will you publish?</p>
              </div>
            )}
            <div className="flex">
              <form method="dialog" className="flex flex-col gap-4">
                {/* if there is a button in form, it will close the modal */}
                <div className="flex">
                  <Button
                    type={BtnType.cancel}
                    className="btn"
                    onClick={closedModal}
                  >
                    Cancel
                  </Button>
                </div>
              </form>

              {!showConfirm && (
                <Button
                  type={BtnType.submit}
                  className="btn"
                  onClick={AddedReview}
                >
                  Add
                </Button>
              )}
              {showConfirm && (
                <Button type={BtnType.submit} onClick={submittedReviewState}>
                  Publish
                </Button>
              )}
            </div>
          </div>
        </dialog>
      </>
    );
  }
);

AddReviewModal.displayName = "AddReviewModal";

export default AddReviewModal;
