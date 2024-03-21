"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { DropDownContext } from "@/context/DropDownContext";
import { useState, useContext } from "react";
import MyFavorite from "./favorite/page";
import MyReviews from "./reviews/page";
import UserProfile from "./userProfile/page";

export default function Users() {
  const router = useRouter();
  // const searchParams = useSearchParams();
  // const [activeTab, setActiveTab] = useState(
  //   searchParams.get("tab") || "favorite"
  // );
  // const { activeTab, setActiveTab, changedTabs } = useContext(DropDownContext);
  const { activeTab, setActiveTab } = useContext(DropDownContext);
  const changedTabs = (tabName: string) => {
    setActiveTab(tabName);
    router.push(`/users?tab=${tabName}`);
  };
  console.log("Users page", activeTab);

  return (
    <>
      <div role="tablist" className="tabs tabs-lifted grid grid-cols-3 mt-5">
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className={`tab tab-primary [--tab-bg:#FED766] bg-primary text-white ${
            activeTab === "favorite" ? "active-tab" : ""
          }`}
          aria-label="My Favorite"
          // onClick={() => changedTabs("favorite")}
        />
        <div role="tabpanel" className="tab-content p-2">
          {activeTab === "favorite" && <MyFavorite />}
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className={`tab tab-primary [--tab-bg:#FED766] bg-primary text-white ${
            activeTab === "reviews" ? "active-tab" : ""
          }`}
          aria-label="My Reviews"
          onClick={() => changedTabs("reviews")}
        />
        <div role="tabpanel" className="tab-content p-4">
          {activeTab === "reviews" && <MyReviews />}
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
          {activeTab === "userProfile" && <UserProfile />}
        </div>
      </div>
    </>
  );
}
