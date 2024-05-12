"use client";
import "./globals.css";
import Header from "@/components/header";
import { DropDownContextProvider } from "@/context/DropDownContext";
import {
  RestaurantContext,
  RestaurantContextProvider,
} from "@/context/RestaurantContext";
import { UserContextProvider } from "@/context/UserContext";
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
        <UserContextProvider>
          <RestaurantContextProvider>
            <DropDownContextProvider>
              {isHeaderReady() && <Header />}
              {children}
            </DropDownContextProvider>
          </RestaurantContextProvider>
        </UserContextProvider>
      </body>
    </html>
  );
}
