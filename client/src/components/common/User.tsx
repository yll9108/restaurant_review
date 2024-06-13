"use client";
import { useContext } from "react";
import { UserContext } from "@/context/UserContext";
import Image from "next/image";
function User() {
  const { user } = useContext(UserContext);

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
        <div className=" w-24 text-center">{user?.user_name}</div>
      </div>
    </>
  );
}

export default User;
