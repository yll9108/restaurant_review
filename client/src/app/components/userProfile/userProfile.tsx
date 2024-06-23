"use client";
import User from "@/components/common/User";
import { BtnType, Button } from "@/components/common/button";
import { useRouter } from "next/navigation";
import { FaExclamationTriangle } from "react-icons/fa";
import { useContext, useRef, useState, useEffect } from "react";
import { DropDownContext } from "@/context/DropDownContext";
import axios from "axios";
import { UserContext } from "@/context/UserContext";
import {
  getAuth,
  deleteUser,
  EmailAuthProvider,
  reauthenticateWithCredential,
} from "firebase/auth";
import DeleteAccount from "./deleteAccount";

export default function UserProfile() {
  const { changedTabs } = useContext(DropDownContext);
  const { user } = useContext(UserContext);
  const router = useRouter();
  const modalRef = useRef<HTMLDialogElement>(null);
  const [reauthenticate, setReauthenticate] = useState(false);
  const [password, setPassword] = useState("");

  // const handleDelete = async (event: React.MouseEvent<HTMLButtonElement>) => {
  //   event.preventDefault();
  //   const auth = getAuth();

  //   if (user) {
  //     const currentUser = auth.currentUser;
  //     const credential = EmailAuthProvider.credential(
  //       currentUser?.email!,
  //       password
  //     );
  //     try {
  //       // Require that the user has recently signed in.
  //       await reauthenticateWithCredential(currentUser!, credential);

  //       //Delete users account from mongoDB
  //       await axios.delete(
  //         `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/${user?._id}`
  //       );

  //       await deleteUser(currentUser!).then(() => {
  //         console.log("User deleted successfully");

  //         router.push("/");
  //       });
  //     } catch (error) {
  //       console.error("Error deleting user:", error);
  //     }
  //   }
  // };

  // useEffect(() => {
  //   const getRef = () => {
  //     if (modalRef.current) {
  //       modalRef.current.showModal();
  //     }
  //   };
  //   getRef();
  // }, []);

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
