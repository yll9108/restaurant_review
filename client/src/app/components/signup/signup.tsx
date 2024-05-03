"use client";
import { useContext, useState } from "react";
import { Input, TextType } from "@/components/common/Input";
import { BtnType, Button } from "@/components/common/button";
import { LoginStatus, UserContext } from "@/context/UserContext";
import { useRouter } from "next/navigation";
export default function Signup() {
  const { loginStatus, setLoginStatus } = useContext(UserContext);

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  //Alert Message
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

  const handleSingUp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoginStatus(LoginStatus.LoggedIn);
    router.push("/");
  };
  return (
    <>
      <div className="bg-secondary">
        <h1 className="text-3xl text-center mb-5">Sign Up</h1>

        {loginStatus === LoginStatus.LoggedOut && (
          //first step
          <div>
            <p className="text-warning">{alertMessage}</p>
            <form action="" onSubmit={handleEmailAuth}>
              <div className="flex flex-col items-center">
                <Input
                  textType={TextType.text}
                  placeholder="Your email address"
                  onChange={(event) => setEmail(event.target.value)}
                />
                <Input
                  textType={TextType.password}
                  placeholder="Create password"
                  onChange={(event) => setPassword(event.target.value)}
                />
                <Input
                  textType={TextType.password}
                  placeholder="Confirm password"
                  onChange={(event) => setConfirmPassword(event.target.value)}
                />
                <Button type={BtnType.submit}>Next</Button>
                <p className="mb-4">or</p>
                <Button type={BtnType.regular_google}>
                  Sign up with Google
                </Button>
              </div>
            </form>
          </div>
        )}

        {loginStatus === LoginStatus.SigningUp && (
          <div>
            <form action="" onSubmit={handleSingUp}>
              <div className="flex flex-col">
                <Input textType={TextType.text} />
                <Button type={BtnType.submit}>Register</Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
