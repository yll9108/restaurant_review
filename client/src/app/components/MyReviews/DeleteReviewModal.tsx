"use client";
import { forwardRef, RefObject } from "react";
import { BtnType, Button } from "@/components/common/button";
import axios from "axios";
import { Restaurant, Review } from "@/types/types";

interface DeleteReviewProps {
  modalRef: RefObject<HTMLDialogElement>;
  // restaurantReviews: {
  //   restaurantName: string;
  //   review: Review;
  // };
  // setRestaurantReviews: (restaurantReview: {
  //   restaurantName: string;
  //   review: Review;
  // }) => void;
  reviewId: string;
  setRestaurantReviews: React.Dispatch<
    React.SetStateAction<{ restaurantName: string; review: Review }[]>
  >;
}

const DeleteReviewModal = forwardRef<HTMLDialogElement, DeleteReviewProps>(
  ({ modalRef, setRestaurantReviews, reviewId }, ref) => {
    //delete review
    const deleteReviewHandler = async (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      event.preventDefault();
      console.log("reviewId: ", reviewId);
      try {
        const res = await axios.delete(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/reviews/${reviewId}`
        );
        console.log("review deleted", res.data);

        setRestaurantReviews((prev) =>
          prev.filter((review) => review.review._id !== reviewId)
        );
        modalRef.current?.close();
      } catch (err) {
        console.log("Error deleting review", err);
      }
    };

    return (
      <dialog ref={ref || modalRef} id="my_modal_1" className="modal">
        <div className="modal-box">
          <p className="py-4">Are you sure to delete your review?</p>
          <div className="flex justify-around mt-1">
            <div className="modal-action m-0">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <Button type={BtnType.cancel}>Cancel</Button>
              </form>
            </div>
            <Button type={BtnType.delete} onClick={deleteReviewHandler}>
              Delete
            </Button>
          </div>
        </div>
      </dialog>
    );
  }
);

DeleteReviewModal.displayName = "DeleteReviewModal";
export default DeleteReviewModal;
