import { useContext } from "react";
import AddReview from "./AddReview";
import { UserContext } from "@/context/UserContext";
import { LoginStatus } from "@/types/types";

function NoReviews() {
  const { loginStatus } = useContext(UserContext);

  return (
    <div className="flex justify-center items-center lg:w-2/3 lg:h-96">
      <h3 className="text-2xl text-center mt-4">
        There are no reviews yet.
        <br /> Your review would be appreciated
      </h3>
      {/* <div className="w-15"></div> */}
    </div>
  );
}

{
  /* {loginStatus === LoginStatus.LoggedIn ? <AddReview /> : <></>} */
}
export default NoReviews;
