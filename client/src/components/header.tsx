"use client";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { Input, TextType } from "./common/Input";
import Avatar from "@/app/components/header/Avatar";
import HeaderLogo from "@/app/components/header/HeaderLogo";
import { UserContext } from "@/context/UserContext";
import { BtnType, Button } from "./common/button";
import { LoginStatus } from "@/types/types";

export default function Header() {
  const router = useRouter();
  const { user, loginStatus, setLoginStatus } = useContext(UserContext);

  console.log("header login status", loginStatus);
  const handleLogIn = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setLoginStatus(LoginStatus.LoggedOut);
    router.push("/login");
  };
  return (
    <header className="w-full bg-primary h-16 flex justify-end items-center">
      <HeaderLogo />
      <div className="flex justify-center items-center">
        <Input textType={TextType.text} className="mr-2 mb-0" />
        {user ? (
          <Avatar />
        ) : (
          <Button type={BtnType.submit} onClick={handleLogIn}>
            Log In
          </Button>
        )}
      </div>
    </header>
  );
}
