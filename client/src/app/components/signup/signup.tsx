"use client";
import { useContext, useState } from "react";
import { Input } from "@/components/common/Input";
import { Button } from "@/components/common/button";
import { LoginStatus, UserContext } from "@/context/UserContext";
export default function Signup() {
  const { loginStatus, setLoginStatus } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const handleEmailAuth = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("password", password);
    console.log("confirmPassword", confirmPassword);

    if (password === confirmPassword) {
      setLoginStatus(LoginStatus.SigningUp);
      setPassword("");
      setConfirmPassword("");
    } else {
      setAlertMessage("Password and Confirm Password doesn't match");
    }
  };
  return (
    <div className="bg-secondary">
      <h1 className="text-3xl text-center mb-5">Sign Up</h1>
      <p className="text-warning">{alertMessage}</p>
      <form action="" onSubmit={handleEmailAuth}>
        <div className="flex flex-col items-center">
          <Input
            textType={0}
            placeholder="Your email address"
            onChange={(event) => setEmail(event.target.value)}
          />
          <Input
            textType={1}
            placeholder="Create password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <Input
            textType={1}
            placeholder="Confirm password"
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          <Button type={0}>Next</Button>
          <p className="mb-4">or</p>
          <Button type={1}>Sign up with Google</Button>
        </div>
      </form>
    </div>
  );
}
