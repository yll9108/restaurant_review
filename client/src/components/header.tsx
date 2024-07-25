"use client";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import Avatar from "@/app/components/header/Avatar";
import HeaderLogo from "@/app/components/header/HeaderLogo";
import { UserContext } from "@/context/UserContext";
import { BtnType, Button } from "./common/button";
import SearchBar from "./common/searchBar";
import axios from "axios";

const Header = () => {
  const router = useRouter();
  const { user } = useContext(UserContext);

  return (
    <header className="w-full bg-primary h-16 flex justify-end items-center fixed z-50 top-0">
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
};

export default Header;
