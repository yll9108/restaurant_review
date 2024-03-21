"use client";
import { useRouter } from "next/navigation";
import { Input, TextType } from "./common/Input";
import Avatar from "@/app/components/header/Avatar";
import HeaderLogo from "@/app/components/header/HeaderLogo";

export default function Header() {
  const homeRouter = useRouter();

  const clickedHomeHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    homeRouter.push("/");
  };
  return (
    <header className="w-full bg-primary h-16 flex justify-end items-center">
      <HeaderLogo />
      <div className="flex justify-center items-center">
        <Input textType={TextType.text} className="mr-2 mb-0" />
        <Avatar />
      </div>
    </header>
  );
}
