"use client"; // tell react this is a client component

import React, { useEffect, useState } from "react";

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
      <div className="flex">
        <div className="bg-primary">123</div>
        <div>123</div>
      </div>
    </>
  );
}
export default Page;
