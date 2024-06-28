"use client";
import AuthProvider from "@/auth/auth_provider";
import "./globals.css";
import { DropDownContextProvider } from "@/context/DropDownContext";
import { PageContextProvider } from "@/context/PageContext";
import { RestaurantContextProvider } from "@/context/RestaurantContext";
import { UserContextProvider } from "@/context/UserContext";
import { usePathname } from "next/navigation";
import { ReviewsContextProvider } from "@/context/ReviewsContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  // const isHeaderReady = (): boolean => {
  //   if (
  //     pathname.length > 0 &&
  //     pathname !== "/login" &&
  //     pathname !== "/signup"
  //   ) {
  //     return true;
  //   }
  //   return false;
  // };

  return (
    <html lang="en">
      <body>
        <PageContextProvider>
          <UserContextProvider>
            <RestaurantContextProvider>
              <DropDownContextProvider>
                <ReviewsContextProvider>
                  {/* {isHeaderReady() && <Header />} */}
                  <AuthProvider>{children}</AuthProvider>
                  {/* {children} */}
                </ReviewsContextProvider>
              </DropDownContextProvider>
            </RestaurantContextProvider>
          </UserContextProvider>
        </PageContextProvider>
      </body>
    </html>
  );
}
