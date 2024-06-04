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
  setClickedRestaurant: React.Dispatch<React.SetStateAction<Restaurant | null>>;
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
  _id: number;
  review_icon: string;
  review_ratings: number;
  review_date: Date;
  review_title: string;
  review_description: string;
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
type User = {
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
  user: User | null;
  setUser: (userStatus: User | null) => void;
  firebaseAccount: FirebaseAccount | null;
  setFirebaseAccount: (firebaseAccount: FirebaseAccount | null) => void;
  loginStatus: LoginStatus;
  setLoginStatus: (loginStatus: LoginStatus) => void;
};

export type {
  Restaurant,
  PartialRestaurantData,
  PaginationData,
  Review,
  RestaurantContextType,
  PageContextProps,
  User,
  FirebaseAccount,
  UserContextProps,
};
