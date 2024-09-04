"use client";
import AuthProvider from "@/auth/auth_provider";
import "./globals.css";
import { DropDownContextProvider } from "@/context/DropDownContext";
import { PageContextProvider } from "@/context/PageContext";
import { RestaurantContextProvider } from "@/context/RestaurantContext";
import { UserContextProvider } from "@/context/UserContext";
import { ReviewsContextProvider } from "@/context/ReviewsContext";
import { Suspense } from "react";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full">
        <PageContextProvider>
          <UserContextProvider>
            <RestaurantContextProvider>
              <Suspense>
                <DropDownContextProvider>
                  <ReviewsContextProvider>
                    <AuthProvider>{children}</AuthProvider>
                  </ReviewsContextProvider>
                </DropDownContextProvider>
              </Suspense>
            </RestaurantContextProvider>
          </UserContextProvider>
        </PageContextProvider>
      </body>
    </html>
  );
}
