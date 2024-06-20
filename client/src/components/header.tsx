"use client";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import Avatar from "@/app/components/header/Avatar";
import HeaderLogo from "@/app/components/header/HeaderLogo";
import { UserContext } from "@/context/UserContext";
import { BtnType, Button } from "./common/button";
import SearchBar from "./common/searchBar";
import axios from "axios";

export default function Header() {
  const router = useRouter();
  const { user } = useContext(UserContext);
  // const [restaurants, setRestaurants] =

  const searchRestaurants = (text: string) => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/search/?text=` + text)
      .then((res) => {});
  };

  return (
    <header className="w-full bg-primary h-16 flex justify-end items-center">
      <HeaderLogo />
      <div className="flex justify-center items-center sm:mr-4">
        <SearchBar />
        {user ? (
          <Avatar />
        ) : (
          <Button type={BtnType.logIn} onClick={() => router.push("/login")}>
            Log In
          </Button>
        )}
      </div>
    </header>
  );
}
