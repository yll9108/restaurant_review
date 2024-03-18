"use client";
import MyFavorite from "./favorite/page";
import MyReviews from "./reviews/page";
import UserProfile from "./userProfile/page";
export default function Page() {
  return (
    <>
      <div role="tablist" className="tabs tabs-bordered grid grid-cols-3">
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="My Favorite"
        />
        <div role="tabpanel" className="tab-content p-10">
          <MyFavorite />
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="My Reviews"
          // checked
        />
        <div role="tabpanel" className="tab-content p-10">
          <MyReviews />
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab"
          aria-label="User Profile"
        />
        <div role="tabpanel" className="tab-content p-10">
          <UserProfile />
        </div>
      </div>
    </>
  );
}
