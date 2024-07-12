import React, { useContext } from "react";
import RestaurantInfo from "./RestaurantInfo";
import Tags from "./Tags";
import Address from "./Address";
import { PartialRestaurantData } from "@/types/types";
import { useRouter } from "next/navigation";
import { RestaurantContext } from "@/context/RestaurantContext";

function Card({
  _id,
  restaurant_name,
  restaurant_avg_ratings,
  restaurant_number_reviews,
  restaurant_tags,
  restaurant_add,
}: PartialRestaurantData) {
  // click restaurant div, will lead to detailPage //
  const router = useRouter();

  // const { setClickedRestaurant } = useContext(RestaurantContext);

  const clickRestaurant = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    console.log("clicked");
    router.push(`restaurants/${_id}`);
  };

  return (
    <div onClick={clickRestaurant}>
      <div className="card w-96 bg-base-100 shadow-xl m-4 hover:scale-110 cursor-pointer">
        <div className="card-body">
          <div>
            <RestaurantInfo
              restaurant_name={restaurant_name}
              restaurant_avg_ratings={restaurant_avg_ratings}
              restaurant_number_reviews={restaurant_number_reviews}
            />
            <Address restaurant_add={restaurant_add} />
            <Tags restaurant_tags={restaurant_tags} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Card);
