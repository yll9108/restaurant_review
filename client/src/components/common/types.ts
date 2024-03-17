type DummyRestaurantData = {
  id: number;
  name: string;
  ratingNum: number;
  reviews: number;
  tags: string;
  add: string;
  mapString: string;
};

type PartialDummyRestaurantData = Partial<DummyRestaurantData>;

type PaginationData = {
  restaurantsPerPage: number;
  totalRestaurants: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
};

export type { DummyRestaurantData, PartialDummyRestaurantData, PaginationData };
