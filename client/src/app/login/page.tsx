"use client";
import Login from "../components/login/Login";
import { Suspense } from "react";
const Home = () => {
  return (
    <main className="bg-accent h-screen pt-32 ">
      <Suspense>
        <Login />
      </Suspense>
    </main>
  );
};

export default Home;
