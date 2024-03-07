"use client";
import { Button } from "./common/button";
import Input from "./common/Input";
export default function Header() {
  return (
    <header className="w-full bg-accent h-16 flex justify-end items-center">
      <div className="flex justify-center">
        <Input
          textType={3}
          className="mr-2 mb-0"
          placeholder="please enter text"
        />
        <Button type={2} className="btn-secondary text-gray-950 mr-12 mb-0">
          Log In
        </Button>
      </div>

      {/* <button className="btn btn-primary">button</button> */}
    </header>
  );
}
