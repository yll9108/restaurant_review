"use client"; // tell react this is a client component

import React, { useEffect, useState } from "react";

function page() {
  const [message, setMessage] = useState("Loading");
  useEffect(() => {
    fetch("http://localhost:8080/api/home")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMessage(data.message);
      });
  }, []);

  return (
    <>
      <div className="pb-5 text-4xl">{message}</div>
    </>
  );
}
export default page;
