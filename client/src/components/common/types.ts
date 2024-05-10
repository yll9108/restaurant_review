type DummyRestaurantData = {
  _id: number;
  restaurant_name: string;
  restaurant_avg_ratings: number;
  restaurant_number_reviews: number;
  restaurant_tags: string;
  restaurant_add: string;
  mapString: string;
};

type PartialDummyRestaurantData = Partial<DummyRestaurantData>;

type RestaurantContextType = {
  restaurantsData: DummyRestaurantData[];
  clickedRestaurant: DummyRestaurantData | null;
  setClickedRestaurant: React.Dispatch<
    React.SetStateAction<DummyRestaurantData | null>
  >;
};

type PaginationData = {
  restaurantsPerPage: number;
  totalRestaurants: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
};

type Review = {
  _id: number;
  icon: string;
  review_ratings: number;
  date: Date;
  review_title: string;
  review_description: string;
};

export type {
  DummyRestaurantData,
  PartialDummyRestaurantData,
  PaginationData,
  Review,
  RestaurantContextType,
};
