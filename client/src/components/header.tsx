"use client";
import { Button } from "./common/Button";

export default function Header() {
  return (
    <header
      className="w-full bg-accent h-16 flex justify-end items-center"
    >
      <Button type={2} className="btn-secondary text-gray-950 mr-12">Log In</Button>
      
      {/* <button className="btn btn-primary">button</button> */}
    </header>
  );
}
