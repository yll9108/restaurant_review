import { ReactNode, RefObject } from "react";

// Type for Restaurant
type Restaurant = {
  _id: string;
  restaurant_name: string;
  restaurant_avg_ratings: number;
  restaurant_number_reviews: number;
  restaurant_tags: string;
  restaurant_add: string;
  mapString: string;
};

type PartialRestaurantData = Partial<Restaurant>;

type RestaurantContextType = {
  restaurantId: Restaurant["_id"];
  setRestaurantId: (restaurantId: string) => void;
  restaurantsData: Restaurant[];
  clickedRestaurant: Restaurant | null;
  setClickedRestaurant: (clickedRestaurant: Restaurant | null) => void;
  searchValue: string;
  setSearchValue: (value: string) => void;
};

// Type for Pagination
type PaginationData = {
  restaurantsPerPage: number;
  totalRestaurants: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
};

// Type for Reviews
type Review = {
  _id: string;
  review_icon: string;
  review_ratings: number;
  review_date: string;
  review_title: string;
  review_description: string;
  restaurantId: string;
  userId: string;
};

type ShowConfirmProps = {
  showConfirm: boolean;
  setShowConfirm: (showConfirm: boolean) => void;
  modalRef: RefObject<HTMLDialogElement>;
};

type Rating = {
  num: number;
  face: ReactNode;
};

type NewReview = {
  review_ratings: number;
  review_date: string;
  review_title: string;
  review_description: string;
  restaurantId: string;
  userId: string | undefined;
};

type ReviewInputProps = {
  reviewTitle: string;
  setReviewTitle: (reviewTitle: string) => void;
  reviewDesc: string;
  setReviewDesc: (reviewDesc: string) => void;
  reviewRating: number;
  setReviewRating: (reviewRating: number) => void;
};

type InitialReviewStateProps = {
  reviewTitle: string;
  reviewDesc: string;
  reviewRating: number;
};

type ReviewsContextProps = {
  reviews: Review | null;
  setReviews: (reviews: Review | null) => void;
  hasReviews: boolean;
  setHasReviews: (hasReviews: boolean) => void;
  allReviews: Review[];
  setAllReviews: (allReviews: Review[]) => void;
};

// Type for PageContext
export enum PageStatus {
  Loading = "Loading",
  NotFound = "Not Found",
  Ready = "Ready",
}

type PageContextProps = {
  pageStatus: PageStatus;
  setPageStatus: (pageStatus: PageStatus) => void;
  notFound: () => void;
};

// Type for Users
type UserInfo = {
  _id: string;
  user_name: string;
  user_picture: string;
  user_email: string;
  user_password: string;
  user_favorite_restaurant: string[];
  provider?: string;
};

type FirebaseAccount = {
  uid: string;
  email: string | null;
  displayName?: string | null;
  photoURL?: string | null;
  providerData?: Array<ProviderData>;
};

type ProviderData = {
  providerId: string;
};

export enum LoginStatus {
  Unknown = "unknown",
  LoggedIn = "Logged In",
  LoggedOut = "Logged Out",
  SigningUp = "Signing Up",
}

type UserContextProps = {
  user: UserInfo | null;
  setUser: (userStatus: UserInfo | null) => void;
  firebaseAccount: FirebaseAccount | null;
  setFirebaseAccount: (firebaseAccount: FirebaseAccount | null) => void;
  loginStatus: LoginStatus;
  setLoginStatus: (loginStatus: LoginStatus) => void;
};

export type {
  //Restaurants
  Restaurant,
  PartialRestaurantData,
  RestaurantContextType,
  PaginationData,
  //Reviews
  Review,
  ShowConfirmProps,
  Rating,
  NewReview,
  ReviewInputProps,
  InitialReviewStateProps,
  ReviewsContextProps,
  //PageContext
  PageContextProps,
  //Users
  UserInfo,
  FirebaseAccount,
  UserContextProps,
};
