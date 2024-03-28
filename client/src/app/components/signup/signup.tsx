"use client";
import { useContext } from "react";
import { Input } from "@/components/common/Input";
import { Button } from "@/components/common/button";
import { LoginStatus, UserContext } from "@/context/UserContext";
export default function Signup() {
  return (
    <div className="bg-secondary">
      <h1 className="text-3xl text-center mb-5">Sign Up</h1>
      <div className="flex flex-col items-center">
        <Input textType={0} placeholder="Your email address" />
        <Input textType={1} placeholder="Create password" />
        <Input textType={1} placeholder="Confirm password" />
        <Button type={0}>Next</Button>
        <p className="mb-4">or</p>
        <Button type={1}>Sign up with Google</Button>
      </div>
    </div>
  );
}
