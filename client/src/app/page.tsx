"use client"; // tell react this is a client component

import { redirect, RedirectType } from "next/navigation";

const Page = () => {
  redirect("/restaurants", RedirectType.replace);
};

export default Page;
