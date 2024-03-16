import React from "react";
import RestaurantInfo from "./RestaurantInfo";
import Tags from "./Tags";
import Address from "./Address";
import { PartialDummyRestaurantData } from "@/components/common/types";
import { useRouter } from "next/navigation";

function Card({
  id,
  name,
  ratingNum,
  reviews,
  tags,
  add,
}: PartialDummyRestaurantData) {
  // click restaurant div, will lead to detailPage //
  const router = useRouter();
  const clickRestaurant = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    console.log("clicked");
    router.push(`restaurants/${id}`);
  };

  return (
    <div onClick={clickRestaurant}>
      <div className="card w-96 bg-base-100 shadow-xl m-4 hover:scale-110">
        <div className="card-body">
          <div>
            <RestaurantInfo
              name={name}
              ratingNum={ratingNum}
              reviews={reviews}
            />
            <Tags tags={tags} />
            <Address add={add} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
