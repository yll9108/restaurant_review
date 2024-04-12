"use client"; // tell react this is a client component

import React, { useEffect, useState } from "react";
import Card from "./Card";
import Pagination from "./Pagination";
import { DummyRestaurantData } from "@/components/common/types";
import { dummyRestaurantList } from "./dummyRestaurantList";

function Restaurants() {
  const [currentPage, setCurrentPage] = useState(1);
  const [restaurantPerPage, setRestaurantPerPage] = useState(6);

  // logic for pagination
  const indexOfLastRestaurant = currentPage * restaurantPerPage;
  const indexOfFirstRestaurant = indexOfLastRestaurant - restaurantPerPage;
  const currentRestaurants = dummyRestaurantList.slice(
    indexOfFirstRestaurant,
    indexOfLastRestaurant
  );

  // when click on different page, set to that page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // leave for now, will use later for fetching data
  // const [message, setMessage] = useState("Loading");
  // useEffect(() => {
  //   fetch("http://localhost:8080/api/home")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setMessage(data.message);
  //     });
  // }, []);

  return (
    <>
      <div className="flex flex-wrap">
        {currentRestaurants &&
          currentRestaurants.map(
            (restaurant: DummyRestaurantData, index: number) => (
              <Card
                key={index}
                id={restaurant.id}
                name={restaurant.name}
                ratingNum={restaurant.ratingNum}
                reviews={restaurant.reviews}
                tags={restaurant.tags}
                add={restaurant.add}
              />
            )
          )}
      </div>
      <div className="mt-5 flex justify-center">
        <Pagination
          restaurantsPerPage={restaurantPerPage}
          totalRestaurants={dummyRestaurantList.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </>
  );
}
export default Restaurants;
