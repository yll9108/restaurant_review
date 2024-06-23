"use client";
import User from "@/components/common/User";
import { BtnType, Button } from "@/components/common/button";
import { TextType, Input } from "@/components/common/Input";
import { useContext, useState } from "react";
import { DropDownContext } from "@/context/DropDownContext";
import { UserContext } from "@/context/UserContext";
import axios from "axios";
import { UserInfo } from "@/types/types";

export default function UserEdit() {
  const [updatedName, setUpdatedName] = useState<string>("");
  const { changedTabs } = useContext(DropDownContext);
  const { user, setUser } = useContext(UserContext);

  const changedUserName = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (user) {
      if (!updatedName) {
        alert("Name cannot be empty");
        return;
      }
      const updatedUser: UserInfo = {
        ...user,
        user_name: updatedName,
      };

      await axios
        .put(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/${updatedUser?._id}`,
          updatedUser,
          {
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          setUser(res.data);
          changedTabs("userProfile");
        });
    }
  };

  const handleCancel = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    changedTabs("userProfile");
  };

  return (
    <div className="w-64 mx-auto mt-10">
      <h2 className="text-center text-2xl mb-4">User Profile</h2>
      <User />
      <form onSubmit={changedUserName}>
        <Input
          textType={TextType.text}
          placeholder="Type your name"
          onChange={(event) => setUpdatedName(event.target.value)}
        />
        <div className="flex">
          <Button
            type={BtnType.cancel}
            className="block mx-auto "
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button type={BtnType.logIn} className="block mx-auto">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
