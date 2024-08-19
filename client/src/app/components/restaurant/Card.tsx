import React, { useContext } from "react";
import RestaurantInfo from "./RestaurantInfo";
import Tags from "./Tags";
import Address from "./Address";
import { PartialRestaurantData } from "@/types/restaurantTypes";
import { useRouter } from "next/navigation";
import FavButton from "./FavButton";

const Card = ({
  _id,
  restaurant_name,
  restaurant_avg_ratings,
  restaurant_number_reviews,
  restaurant_tags,
  restaurant_add,
}: PartialRestaurantData) => {
  // click restaurant div, will lead to detailPage //
  const router = useRouter();

  const clickRestaurant = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    console.log("clicked");
    router.push(`restaurants/${_id}`);
  };
  // const submitFav = (e: React.MouseEvent<HTMLElement>) => {
  //   e.preventDefault();

  //   console.log("clicked");
  //   // setIsFav(true);
  // };
  return (
    <div onClick={clickRestaurant}>
      <div className="card bg-base-100 shadow-xl m-4 hover:scale-110 cursor-pointer">
        <div className="card-body p-4">
          <RestaurantInfo
            restaurant_name={restaurant_name}
            restaurant_avg_ratings={restaurant_avg_ratings}
            restaurant_number_reviews={restaurant_number_reviews}
          />
          <Address restaurant_add={restaurant_add} />
          <div className="flex">
            <Tags restaurant_tags={restaurant_tags} />
            {/* <FavButton className="" onClick={submitFav} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Card);
