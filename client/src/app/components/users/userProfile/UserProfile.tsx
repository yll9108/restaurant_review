"use client";
import User from "@/components/common/User";
import { BtnType, Button } from "@/components/common/button";
export default function UserProfiles() {
  return (
    <>
      <div className="w-32 bg-secondary mx-auto mt-10">
        <h2 className="text-center text-2xl mb-4">User Profile</h2>
        <User />
        <Button type={BtnType.submit} className="block mx-auto mt-10">
          Edit
        </Button>
      </div>
    </>
  );
}
