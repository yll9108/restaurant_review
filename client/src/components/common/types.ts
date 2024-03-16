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

export type { DummyRestaurantData, PartialDummyRestaurantData };
