import React, { useContext } from "react";
import RestaurantInfo from "./RestaurantInfo";
import Tags from "./Tags";
import Address from "./Address";
import { PartialDummyRestaurantData } from "@/components/common/types";
import { useRouter } from "next/navigation";
import { RestaurantContext } from "@/context/RestaurantContext";

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

  const { setClickedRestaurant } = useContext(RestaurantContext);

  // const handleClick = (restaurantId) => {
  //   fetch(`http://localhost:8080/api/restaurants/${restaurantId}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setClickedRestaurant(data);
  //     });
  // };

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
