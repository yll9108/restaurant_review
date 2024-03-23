"use client";
import User from "@/components/common/User";
import { BtnType, Button } from "@/components/common/button";
import { TextType, Input } from "@/components/common/Input";

export default function UserEdit() {
  return (
    <div className="w-64 bg-secondary mx-auto mt-10">
      <h2 className="text-center text-2xl mb-4">User Profile</h2>
      <User />
      <Input textType={TextType.text} placeholder="Type your name" />
      <div className="flex">
        <Button type={BtnType.cancel} className="block mx-auto ">
          Cancel
        </Button>
        <Button type={BtnType.submit} className="block mx-auto">
          Submit
        </Button>
      </div>
    </div>
  );
}
