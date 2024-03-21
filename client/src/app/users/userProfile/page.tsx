"use client";
import User from "@/components/common/User";
import { BtnType, Button } from "@/components/common/button";
import { useRouter } from "next/navigation";
import { FaExclamationTriangle } from "react-icons/fa";

export default function UserProfile() {
  const router = useRouter();
  const clickedHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    router.push("/users?tab=userProfile/edit");
  };
  return (
    <>
      <div className="w-64 bg-secondary mx-auto mt-10">
        <h2 className="text-center text-2xl mb-4">User Profile</h2>
        <User />
        <Button
          type={BtnType.regular}
          className=" btn-small block mx-auto mt-10"
          onClick={clickedHandler}
        >
          Edit
        </Button>
      </div>
      <div className="w-64 mt-64 mx-auto text-center">
        {/* <a className="link link-warning">delete account</a> */}
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <a
          className="link link-warning"
          onClick={() => {
            if (document) {
              (
                document.getElementById("my_modal_1") as HTMLFormElement
              ).showModal();
            }
          }}
        >
          Delete account
        </a>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <div className="flex items-center justify-center">
              <FaExclamationTriangle className="text-warning mr-2 text-xl" />
              <p className="py-4 text-xl">
                Do you really want to delete your account?
              </p>
            </div>
            <div className="flex justify-around">
              <div className="modal-action m-0">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <Button type={BtnType.cancel}>Cancel</Button>
                </form>
              </div>
              <div>
                <Button
                  type={BtnType.delete}
                  onClick={() => router.push("/login")}
                >
                  Delete
                </Button>
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
}
