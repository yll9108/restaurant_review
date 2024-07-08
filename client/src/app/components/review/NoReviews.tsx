import { useContext } from "react";
import AddReview from "./AddReview";
import { UserContext } from "@/context/UserContext";
import { LoginStatus } from "@/types/types";

function NoReviews() {
  const { loginStatus } = useContext(UserContext);

  return (
    <>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="mb-5">No reviews</div>
        {loginStatus === LoginStatus.LoggedIn ? <AddReview /> : <></>}
      </div>
    </>
  );
}

export default NoReviews;
