"use client";
import { useState } from "react";
import MyFavorite from "./favorite/page";
import MyReviews from "./reviews/page";
import UserProfile from "./userProfile/page";
export default function Users() {
  const [activeTab, setActiveTab] = useState("myFavorite");

  const changedTabs = (tabName: string) => {
    setActiveTab(tabName);
  };
  return (
    <>
      <div role="tablist" className="tabs tabs-lifted grid grid-cols-3 mt-5">
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className={`tab tab-primary [--tab-bg:#FED766] bg-primary text-white ${
            activeTab === "myFavorite" ? "active-tab" : ""
          }`}
          aria-label="My Favorite"
          onClick={() => changedTabs("myFavorite")}
        />
        <div role="tabpanel" className="tab-content p-2">
          <MyFavorite />
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className={`tab tab-primary [--tab-bg:#FED766] bg-primary text-white ${
            activeTab === "myReviews" ? "active-tab" : ""
          }`}
          aria-label="My Reviews"
          onClick={() => changedTabs("myReviews")}
        />
        <div role="tabpanel" className="tab-content p-4">
          <MyReviews />
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className={`tab tab-primary [--tab-bg:#FED766] bg-primary text-white ${
            activeTab === "userProfile" ? "active-tab" : ""
          }`}
          aria-label="User Profile"
          onClick={() => changedTabs("userProfile")}
        />
        <div role="tabpanel" className="tab-content p-4">
          <UserProfile />
        </div>
      </div>
    </>
  );
}
