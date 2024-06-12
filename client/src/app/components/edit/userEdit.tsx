"use client";
import User from "@/components/common/User";
import { BtnType, Button } from "@/components/common/button";
import { TextType, Input } from "@/components/common/Input";
import { useContext } from "react";
import { DropDownContext } from "@/context/DropDownContext";
import { UserContext } from "@/context/UserContext";
import axios from "axios";

export default function UserEdit() {
  const { changedTabs } = useContext(DropDownContext);
  const { user } = useContext(UserContext);
  const changedUserName = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    if (user) {
      await axios.put(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/${user?._id}`
      );
    }
  };

  return (
    <div className="w-64 bg-secondary mx-auto mt-10">
      <h2 className="text-center text-2xl mb-4">User Profile</h2>
      <User />
      <Input textType={TextType.text} placeholder="Type your name" />
      <div className="flex">
        <Button
          type={BtnType.cancel}
          className="block mx-auto "
          onClick={() => changedTabs("userProfile")}
        >
          Cancel
        </Button>
        <Button
          type={BtnType.logIn}
          className="block mx-auto"
          onClick={() => changedTabs("userProfile")}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
