"use client";
import { FaHeart, FaSignOutAlt } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useRouter } from "next/navigation";
import { useState, useContext, useRef } from "react";
import { DropDownContext } from "@/context/DropDownContext";

export default function Avatar() {
  // const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();
  const dropDownRef = useRef<HTMLDetailsElement>(null);
  // const { activeTab, setActiveTab, changedTabs } = useContext(DropDownContext);
  const { activeTab, setActiveTab } = useContext(DropDownContext);

  const clickedMyFavorite = (event: React.MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    router.push("/users?tab=favorite");
    // setIsOpen(!isOpen);
    setActiveTab("favorite");
    // changedTabs("favorite");
    if (dropDownRef.current) {
      dropDownRef.current.removeAttribute("open");
    }
  };
  const clickedMyReviews = (event: React.MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    router.push("/users?tab=reviews");
    // setIsOpen(!isOpen);
    setActiveTab("reviews");

    // changedTabs("reviews");
    if (dropDownRef.current) {
      dropDownRef.current.removeAttribute("open");
    }
  };
  const clickedUserProfile = (event: React.MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    router.push("/users?tab=userProfile");
    // setIsOpen(!isOpen);
    setActiveTab("userProfile");
    if (dropDownRef.current) {
      dropDownRef.current.removeAttribute("open");
    }
  };

  const clickedSignOutHandler = (event: React.MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    router.push("/login");
  };

  console.log("avatar", activeTab);

  return (
    <details className="dropdown dropdown-end mr-12 " ref={dropDownRef}>
      <summary
        // tabIndex={0}
        // role="button"
        className="btn btn-secondary btn-circle avatar placeholder"
      >
        <div className="w-10 rounded-full">
          {/* <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
          <span>SY</span>
        </div>
      </summary>
      <ul
        // tabIndex={0}
        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-44 "
      >
        <li
          className="btn btn-ghost px-2 min-h-0 h-9"
          onClick={clickedMyFavorite}
        >
          <div>
            <FaHeart className="text-secondary" />
            <a>My Favorite</a>
          </div>
        </li>
        <li
          className="btn btn-ghost px-2 min-h-0 h-9"
          onClick={clickedMyReviews}
        >
          <div>
            <MdReviews className="text-secondary" />
            <a>My Reviews</a>
          </div>
        </li>
        <li
          className="btn btn-ghost px-2 min-h-0 h-9"
          onClick={clickedUserProfile}
        >
          <div>
            <CgProfile className="text-secondary" />
            <a>User Profile</a>
          </div>
        </li>
        <li
          className="btn btn-ghost  min-h-0 h-9"
          onClick={clickedSignOutHandler}
        >
          <div>
            <FaSignOutAlt className="text-secondary" />
            <a className="pr-4">Sign Out</a>
          </div>
        </li>
      </ul>
    </details>
  );
}
