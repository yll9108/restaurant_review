"use client"; // tell react this is a client component

import { redirect, RedirectType } from "next/navigation";

export default function Page() {
  redirect("/restaurants", RedirectType.replace);
}

// import React, { useEffect, useState } from "react";

// function Page() {
//   const [message, setMessage] = useState("Loading");
//   useEffect(() => {
//     fetch("http://localhost:8080/api/home")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setMessage(data.message);
//       });
//   }, []);

//   return (
//     <>
//       <div className="pb-5 text-4xl">{message}</div>
//     </>
//   );
// }
// export default Page;
