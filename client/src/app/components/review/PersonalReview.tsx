import ReviewDetail from "@/components/common/ReviewDetail";
import User from "@/components/common/User";
import { useState, useContext } from "react";
import "./custom.css";
import { BtnType, Button } from "@/components/common/button";
import { Review } from "@/types/types";
import { UserContext } from "@/context/UserContext";
import { ReviewsContext } from "@/context/ReviewsContext";
import axios from "axios";
// this props that the componment is receving has props called reviews that
// is an array of type review
type Props = {
  allReviews: Review[];
};
function PersonalReview({ allReviews }: Props) {
  const [showAllReviews, setShowAllReviews] = useState(false);
  const { user } = useContext(UserContext);
  // const { reviews } = useContext(ReviewsContext);
  const displayAllReviews = Array.isArray(allReviews)
    ? showAllReviews
      ? allReviews
      : allReviews.slice(0, 5)
    : [];
  const toggleReviews = () => {
    setShowAllReviews(!showAllReviews);
  };
  // console.log("displayAllReviews", displayAllReviews);
  // console.log("reviews", reviews);
  // const checkUser = () => {
  //   if(user?._id === reviews?.userId){
  //     const getUser = async() => {
  //       await axios.get(``)
  //     }
  //   }
  // }
  console.log("allReviews", allReviews);
  let reviewUid: string = "";
  allReviews.map((uid) => {
    return (reviewUid = uid.userId);
  });
  console.log("reviewUid", reviewUid);

  return (
    <>
      <div className="flex flex-col">
        {displayAllReviews.map((review) => (
          <div key={review._id} className="card bg-base-100 shadow-xl m-5">
            <div className="card-body flexRow">
              {/* {user?._id === review.userId ? (
                <User name={user.user_name} />
              ) : (
                <User name={review.userId} />
              )} */}
              <User uid={reviewUid} />

              <ReviewDetail
                _id={review._id}
                review_icon={review.review_icon}
                review_ratings={review.review_ratings}
                review_date={review.review_date}
                review_title={review.review_title}
                review_description={review.review_description}
                restaurantId={review.restaurantId}
                userId={review.userId}
              />
            </div>
          </div>
        ))}
        {allReviews.length > 5 && !showAllReviews && (
          <div className="text-center">
            <Button type={BtnType.regular_google} onClick={toggleReviews}>
              See more reviews
            </Button>
          </div>
        )}
      </div>
    </>
  );
}

export default PersonalReview;
