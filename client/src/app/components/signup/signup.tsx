"use client";
import { useContext, useState } from "react";
import { Input, TextType } from "@/components/common/Input";
import { BtnType, Button } from "@/components/common/button";
import { LoginStatus, UserContext } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import axios from "axios";

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

    const formData = new FormData();

    formData.append("user_name", name);
    formData.append("user_picture", "");
    formData.append("user_email", email);
    formData.append("user_password", password);
    axios
      .post("http://localhost:3000/api/users/register", formData, {
        headers: { "Content-type": "multipart/form-data" },
      })
      .then((res) => {
        console.log("test", res.data);
        setLoginStatus(LoginStatus.LoggedIn);
      });
    router.replace("/");
  };
  return (
    <>
      <div className="bg-secondary">
        <h1 className="text-3xl text-center mb-5">Sign Up</h1>

        {loginStatus === LoginStatus.LoggedOut && (
          //first step
          <div>
            <p className="text-warning">{alertMessage}</p>
            <form onSubmit={handleEmailAuth}>
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
          // second step
          <div>
            <form onSubmit={handleSingUp}>
              <div className="flex flex-col">
                <Input
                  textType={TextType.text}
                  placeholder="type your name"
                  onChange={(event) => setName(event.target.value)}
                />
                <Button type={BtnType.submit}>Register</Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
