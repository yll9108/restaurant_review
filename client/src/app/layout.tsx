"use client";
import "./globals.css";
import Header from "@/components/header";
import Users from "./users/page";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHeaderReady = (): boolean => {
    if (
      pathname.length > 0 &&
      pathname !== "/login" &&
      pathname !== "/signup"
    ) {
      return true;
    }
    return false;
  };

  return (
    <html lang="en">
      <body>
        {isHeaderReady() && <Header />}
        {children}
      </body>
    </html>
  );
}
