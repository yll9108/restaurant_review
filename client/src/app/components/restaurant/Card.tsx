import React from "react";
import RestaurantInfo from "./RestaurantInfo";
import Tags from "./Tags";
import Address from "./Address";
import { PartialDummyRestaurantData } from "@/components/common/types";
import { useRouter } from "next/navigation";

function Card({
  _id,
  restaurant_name,
  restaurant_avg_ratings,
  restaurant_number_reviews,
  restaurant_tags,
  restaurant_add,
}: PartialDummyRestaurantData) {
  // click restaurant div, will lead to detailPage //
  const router = useRouter();
  const clickRestaurant = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    console.log("clicked");
    router.push(`restaurants/${_id}`);
  };

  return (
    <div onClick={clickRestaurant}>
      <div className="card w-96 bg-base-100 shadow-xl m-4 hover:scale-110">
        <div className="card-body">
          <div>
            <RestaurantInfo
              restaurant_name={restaurant_name}
              restaurant_avg_ratings={restaurant_avg_ratings}
              restaurant_number_reviews={restaurant_number_reviews}
            />
            <Tags restaurant_tags={restaurant_tags} />
            <Address restaurant_add={restaurant_add} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
