"use client";
import { Input } from "@/components/common/Input";
import { Button } from "@/components/common/button";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    router.push("/signup");
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center  w-80 h-96 mx-auto">
        <Input textType={2} placeholder="Email" />
        <Input textType={1} placeholder="Password" />
        <Button type={0} onClick={() => router.push("/")}>
          Log In
        </Button>
        <Button type={1}>Log In with Google</Button>
        <p className="mb-4">or</p>
        <Button type={0} onClick={handleClick}>
          Sign Up
        </Button>
      </div>
    </>
  );
}
