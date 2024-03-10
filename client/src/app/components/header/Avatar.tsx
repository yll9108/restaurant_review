"use client";

export default function Avatar() {
  return (
    // <div className="avatar placeholder mr-12">
    //   <div className="bg-secondary text-neutral-content rounded-full w-12">
    //     <span>SY</span>
    //   </div>
    // </div>
    <div className="dropdown dropdown-end mr-12 ">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-secondary btn-circle avatar placeholder"
      >
        <div className="w-10 rounded-full">
          {/* <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
          <span>SY</span>
        </div>
      </div>
      <ul
        tabIndex={0}
        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-44"
      >
        <li>
          <a>My Favorite</a>
        </li>
        <li>
          <a>My Reviews</a>
        </li>
        <li>
          <a>User Profile</a>
        </li>
        <li>
          <a>Sign Out</a>
        </li>
      </ul>
    </div>
  );
}
