"use client"; // tell react this is a client component

import React, { useEffect, useState } from "react";
import Card from "./Card";

function Page() {
  // const [message, setMessage] = useState("Loading");
  // useEffect(() => {
  //   fetch("http://localhost:8080/api/home")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setMessage(data.message);
  //     });
  // }, []);

  return (
    <>
      <div className="flex flex-wrap">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
export default Page;
