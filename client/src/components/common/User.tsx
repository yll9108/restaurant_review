"use client";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/context/UserContext";
import Image from "next/image";
import { ReviewsContext } from "@/context/ReviewsContext";
import axios from "axios";
import { UserInfo } from "@/types/types";
// function User() {
//   const { user } = useContext(UserContext);
//   return (
//     <>
//       <div className="flex flex-col items-center">
//         <div className="avatar">
//           <div className="w-24 rounded-full">
//             <Image
//               src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
//               alt="image picture"
//               width={100}
//               height={100}
//             />
//           </div>
//         </div>
//         <div className=" w-24 text-center">{user?.user_name}</div>
//       </div>
//     </>
//   );
// }
type Props = {
  uid: string | undefined;
};
function User({ uid }: Props) {
  const { user } = useContext(UserContext);
  const { allReviews } = useContext(ReviewsContext);
  // const [getUser, setGetUser] = useState<UserInfo>();
  const [userName, setUserName] = useState<string | undefined>("");
  console.log("uid", uid);
  let reviewsUid = "";
  allReviews.map((userName) => {
    return (reviewsUid += userName.userId);
  });
  console.log("reviewsUid", reviewsUid);

  useEffect(() => {
    if (uid === reviewsUid) {
      try {
        const getUser = async () => {
          const res = await axios.get(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/${uid}`
          );
          // console.log("getUser", res.data);
          setUserName(res.data.user_name);
        };
        getUser();
      } catch (error) {
        console.log("getUser error", error);
      }
    } else {
      setUserName(user?.user_name);
    }
  }, [reviewsUid, uid, user]);
  console.log("userName", userName);

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="avatar">
          <div className="w-24 rounded-full">
            <Image
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              alt="image picture"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className=" w-24 text-center">{userName}</div>
      </div>
    </>
  );
}

export default User;
