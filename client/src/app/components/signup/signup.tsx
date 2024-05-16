"use client";
import { useContext, useState } from "react";
import { Input, TextType } from "@/components/common/Input";
import { BtnType, Button } from "@/components/common/button";
import { LoginStatus, UserContext } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Signup() {
  const { setUser, loginStatus, setLoginStatus } = useContext(UserContext);

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  //Alert Message
  const [alertMessage, setAlertMessage] = useState("");

  const handleEmailAuth = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email || !password) {
      setAlertMessage("missing Information");
    } else if (!/^[^@]+@[^.]+\..+$/.test(email)) {
      setAlertMessage("your email address is not correct");
    } else if (password != confirmPassword) {
      setAlertMessage("Password and Confirm Password doesn't match");
    } else {
      setLoginStatus(LoginStatus.SigningUp);
    }
  };

  const handleSingUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData();
    const userInputObj = {
      user_name: name,
      user_picture: "",
      user_email: email,
      user_password: password,
      user_favorite_restaurant: [""],
    };

    Object.entries(userInputObj).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((v, i) => {
          //array divided to reenter formData
          formData.append(key + "[]", v);
        });
      } else {
        formData.append(key, value);
      }
    });

    console.log("url", process.env.NEXT_PUBLIC_BACKEND_URL);

    await axios
      .post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}api/users/register`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        setUser(res.data);

        setLoginStatus(LoginStatus.LoggedIn);
        router.replace("/");
      })
      .catch((error) => {
        console.error(error.response.data.message);
      });
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
