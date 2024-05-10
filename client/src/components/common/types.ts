type Restaurant = {
  _id: number;
  restaurant_name: string;
  restaurant_avg_ratings: number;
  restaurant_number_reviews: number;
  restaurant_tags: string;
  restaurant_add: string;
  mapString: string;
};

type PartialRestaurantData = Partial<Restaurant>;

type RestaurantContextType = {
  restaurantsData: Restaurant[];
  clickedRestaurant: Restaurant | null;
  setClickedRestaurant: React.Dispatch<React.SetStateAction<Restaurant | null>>;
};

type PaginationData = {
  restaurantsPerPage: number;
  totalRestaurants: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
};

type Review = {
  _id: number;
  review_icon: string;
  review_ratings: number;
  review_date: Date;
  review_title: string;
  review_description: string;
};

export type {
  Restaurant,
  PartialRestaurantData,
  PaginationData,
  Review,
  RestaurantContextType,
};
