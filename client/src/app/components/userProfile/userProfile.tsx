"use client";
import User from "@/components/common/User";
import { BtnType, Button } from "@/components/common/button";
import { useContext, useRef } from "react";
import { DropDownContext } from "@/context/DropDownContext";
import DeleteAccount from "./deleteAccount";

export default function UserProfile() {
  const { changedTabs } = useContext(DropDownContext);
  const modalRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <div className="w-64 mx-auto mt-10">
        <h2 className="text-center text-2xl mb-4">User Profile</h2>
        <User />
        <Button
          type={BtnType.submit}
          className=" btn-small block mx-auto mt-10"
          onClick={() => changedTabs("userEdit")}
        >
          Edit
        </Button>
      </div>
      <div className="w-64 mt-64 mx-auto text-center">
        <a
          className="link link-warning"
          onClick={() => {
            if (modalRef.current) {
              modalRef.current.showModal();
            }
          }}
        >
          Delete account
        </a>
        <DeleteAccount modalRef={modalRef} />
      </div>
    </>
  );
}
