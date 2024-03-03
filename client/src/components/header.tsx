"use client";
import { Button } from "./common/button";
import Input from "./common/Input";
export default function Header() {
  return (
    <header className="w-full bg-accent h-16 flex justify-end items-center">
      <Input textType={0} placeholder="please enter text" />
      <Button type={2} className="btn-secondary text-gray-950 mr-12">
        Log In
      </Button>

      {/* <button className="btn btn-primary">button</button> */}
    </header>
  );
}
