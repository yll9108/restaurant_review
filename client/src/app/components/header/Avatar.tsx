"use client";
import { FaHeart, FaSignOutAlt } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Avatar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();

  const clickedHandler = (event: React.MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    router.push("/users");
    setIsOpen(!isOpen);
  };
  const clickedSignOutHandler = (event: React.MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    router.push("/login");
  };
  return (
    <details className="dropdown dropdown-end mr-12 ">
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
        <li className="btn btn-ghost px-2 min-h-0 h-9" onClick={clickedHandler}>
          <div>
            <FaHeart className="text-secondary" />
            <a>My Favorite</a>
          </div>
        </li>
        <li className="btn btn-ghost px-2 min-h-0 h-9" onClick={clickedHandler}>
          <div>
            <MdReviews className="text-secondary" />
            <a>My Reviews</a>
          </div>
        </li>
        <li className="btn btn-ghost px-2 min-h-0 h-9" onClick={clickedHandler}>
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
