"use client";
import { useContext } from "react";
import { UserContext } from "@/context/UserContext";
function User() {
  const { user } = useContext(UserContext);
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className=" w-24 text-center">{user?.user_name}</div>
      </div>
    </>
  );
}

export default User;
