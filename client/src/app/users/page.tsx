"use client";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { DropDownContext } from "@/context/DropDownContext";
import { useState, useContext } from "react";
import MyFavorite from "../components/favorite/favorite";
import MyReviews from "../components/MyReviews/MyReviews";
import UserProfile from "../components/userProfile/userProfile";

export default function Page() {
  const router = useRouter();
  const { activeTab, setActiveTab } = useContext(DropDownContext);
  const changedTabs = (tabName: string) => {
    setActiveTab(tabName);
    router.push(`/users?tab=${tabName}`);
  };

  return (
    <>
      <div id="TabContainer" className="bg-accent h-screen">
        <div id="TabHead" className="flex py-2 mx-4 border-b-2 border-black ">
          <label
            className={`block text-center rounded-tl-lg w-32 ${
              activeTab === "favorite"
                ? "bg-secondary text-black"
                : "bg-primary text-white"
            }`}
          >
            <input
              type="radio"
              name="my_tab"
              className="type: hidden"
              onClick={() => changedTabs("favorite")}
            />
            My Favorite
          </label>
          <label
            className={`block text-center w-32 ${
              activeTab === "reviews"
                ? "bg-secondary text-black"
                : "bg-primary text-white"
            }`}
          >
            <input
              type="radio"
              name="my_tab"
              className="type: hidden"
              onClick={() => changedTabs("reviews")}
            />
            My Reviews
          </label>
          <label
            className={`block text-center rounded-tr-lg w-32 ${
              activeTab === "userProfile"
                ? "bg-secondary text-black"
                : "bg-primary text-white"
            }`}
          >
            <input
              type="radio"
              name="my_tab"
              className="type: hidden"
              onClick={() => changedTabs("userProfile")}
            />
            User Profile
          </label>
        </div>
        <div>
          {activeTab === "favorite" && <MyFavorite />}
          {activeTab === "reviews" && <MyReviews />}
          {activeTab === "userProfile" && <UserProfile />}
        </div>
      </div>
    </>
  );
}
