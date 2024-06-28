"use client";
import { Review, ReviewsContextProps } from "@/types/types";
import { createContext, ReactNode, useState } from "react";

export const ReviewsContext = createContext<ReviewsContextProps>(
  {} as ReviewsContextProps
);

export function ReviewsContextProvider({ children }: { children: ReactNode }) {
  const [reviews, setReviews] = useState<Review | null>(null);
  return (
    <ReviewsContext.Provider value={{ reviews, setReviews }}>
      {children}
    </ReviewsContext.Provider>
  );
}
