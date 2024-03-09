import React from "react";
import RestaurantInfo from "../restaurant/RestaurantInfo";
import Tags from "../restaurant/Tags";
import Address from "../restaurant/Address";
import RestaurantMap from "./RestaurantMap";
import { RestaurantMockData, restaurantMockData } from "./mockdata";

function RestaurantWithMap() {
  return (
    <>
      <div className="bg-red-200">
        <div className="card w-96 bg-base-100 shadow-xl m-4">
          <div className="card-body">
            {restaurantMockData.map(
              (restaurant: RestaurantMockData, index: number) => (
                <div key={index}>
                  <RestaurantInfo
                    name={restaurant.name}
                    ratingNum={restaurant.ratingNum}
                    reviews={restaurant.reviews}
                  />
                  <Tags tags={restaurant.tags} />
                  <RestaurantMap map={restaurant.map} />
                  <Address add={restaurant.add} />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default RestaurantWithMap;
