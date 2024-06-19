"use client";
import User from "@/components/common/User";
import { BtnType, Button } from "@/components/common/button";
import { useRouter } from "next/navigation";
import { FaExclamationTriangle } from "react-icons/fa";
import { useContext, useRef, useState } from "react";
import { DropDownContext } from "@/context/DropDownContext";
import axios from "axios";
import { UserContext } from "@/context/UserContext";
import {
  getAuth,
  deleteUser,
  EmailAuthProvider,
  reauthenticateWithCredential,
} from "firebase/auth";

export default function UserProfile() {
  const { changedTabs } = useContext(DropDownContext);
  const { user } = useContext(UserContext);
  const router = useRouter();
  const modalRef = useRef<HTMLDialogElement>(null);
  const [reauthenticate, setReauthenticate] = useState(false);
  const [password, setPassword] = useState("");

  const handleDelete = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const auth = getAuth();

    if (user) {
      const currentUser = auth.currentUser;
      const credential = EmailAuthProvider.credential(
        currentUser?.email!,
        password
      );
      try {
        // Require that the user has recently signed in.
        await reauthenticateWithCredential(currentUser!, credential);

        //Delete users account from mongoDB
        await axios.delete(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/users/${user?._id}`
        );

        await deleteUser(currentUser!).then(() => {
          console.log("User deleted successfully");

          router.push("/");
        });
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };

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
        <dialog ref={modalRef} className="modal" id="modalDelete">
          <div className="modal-box">
            <div className="flex items-center justify-center">
              <FaExclamationTriangle className="text-warning mr-2 text-xl" />
              <p className="py-4 text-xl">
                Do you really want to delete your account?
              </p>
            </div>
            {reauthenticate && (
              <div className="flex flex-col items-center">
                <input
                  type="password"
                  placeholder="Re-enter your password"
                  className="input input-bordered w-full max-w-xs"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            )}
            <div className="flex justify-around mt-1">
              <div className="modal-action m-0">
                <form method="dialog" onSubmit={() => setReauthenticate(false)}>
                  {/* if there is a button in form, it will close the modal */}
                  <Button type={BtnType.cancel}>Cancel</Button>
                </form>
              </div>
              <div>
                {!reauthenticate && (
                  <Button
                    type={BtnType.delete}
                    onClick={() => setReauthenticate(true)}
                  >
                    Confirm
                  </Button>
                )}

                {reauthenticate && (
                  <Button type={BtnType.delete} onClick={handleDelete}>
                    Delete
                  </Button>
                )}
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
}
