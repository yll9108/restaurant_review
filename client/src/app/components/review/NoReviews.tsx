import { useContext } from "react";
import AddReview from "./AddReview";
import { UserContext } from "@/context/UserContext";
import { LoginStatus } from "@/types/types";

function NoReviews() {
  const { loginStatus } = useContext(UserContext);

  return (
    <div className="flex flex-col items-center pt-28">
      <h3 className="text-2xl mb-5">No reviews</h3>
      {loginStatus === LoginStatus.LoggedIn ? <AddReview /> : <></>}
    </div>
  );
}

export default NoReviews;
