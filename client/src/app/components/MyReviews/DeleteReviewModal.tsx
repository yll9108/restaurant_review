"use client";
import { forwardRef, RefObject, useContext } from "react";
import { BtnType, Button } from "@/components/common/button";
import axios from "axios";
import { Restaurant, Review } from "@/types/types";
import { ReviewsContext } from "@/context/ReviewsContext";
import { UserContext } from "@/context/UserContext";

interface DeleteReviewProps {
  modalRef: RefObject<HTMLDialogElement>;
  reviewId: string;
  setRestaurantReviews: React.Dispatch<
    React.SetStateAction<{ restaurantName: string; review: Review }[]>
  >;
}

const DeleteReviewModal = forwardRef<HTMLDialogElement, DeleteReviewProps>(
  ({ modalRef, setRestaurantReviews, reviewId }, ref) => {
    const { setAllReviews } = useContext(ReviewsContext);
    const { user } = useContext(UserContext);
    //delete review
    const deleteReviewHandler = async (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      event.preventDefault();
      console.log("deleteReviewModal reviewId: ", reviewId);
      try {
        const res = await axios.delete(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/reviews/delete/${reviewId}`
        );
        console.log("review deleted", res.data);

        setRestaurantReviews((prev) =>
          prev.filter((review) => review.review._id !== reviewId)
        );

        setAllReviews((prev: Review[]) =>
          prev.filter((review) => review._id !== reviewId)
        );
        if (modalRef.current) {
          console.log("Closing modal");

          modalRef.current?.close();
        }
      } catch (err) {
        console.log("Error deleting review", err);
      }
    };

    return (
      <dialog ref={ref || modalRef} id={reviewId} className="modal">
        <div className="modal-box">
          <p className="py-4 text-center">
            Are you sure to delete your review?
          </p>
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
