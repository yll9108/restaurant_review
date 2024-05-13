"use client";
import { createContext, ReactNode, useState } from "react";

export enum LoginStatus {
  Unknown = "unknown",
  LoggedIn = "Logged In",
  LoggedOut = "Logged Out",
  SigningUp = "Signing Up",
}

export type User = {
  // id: string;
  name: string;
  email: string;
};

type UserContextProps = {
  user: User | null;
  setUser: (userStatus: User) => void;
  loginStatus: LoginStatus;
  setLoginStatus: (loginStatus: LoginStatus) => void;
};

export const UserContext = createContext<UserContextProps>(
  {} as UserContextProps
);

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loginStatus, setLoginStatus] = useState(LoginStatus.Unknown);
  return (
    <UserContext.Provider
      value={{ user, setUser, loginStatus, setLoginStatus }}
    >
      {children}
    </UserContext.Provider>
  );
}
