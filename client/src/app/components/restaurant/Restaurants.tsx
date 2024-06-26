"use client"; // tell react this is a client component

import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import Pagination from "./Pagination";
import { Restaurant } from "@/types/types";
import { RestaurantContext } from "@/context/RestaurantContext";

function Restaurants() {
  const { restaurantsData } = useContext(RestaurantContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [restaurantPerPage, setRestaurantPerPage] = useState(6);

  // move to context
  // const [restaurantsData, setRestaurantsData] = useState([]);

  // logic for pagination
  const indexOfLastRestaurant = currentPage * restaurantPerPage;
  const indexOfFirstRestaurant = indexOfLastRestaurant - restaurantPerPage;
  const currentRestaurants = restaurantsData.slice(
    indexOfFirstRestaurant,
    indexOfLastRestaurant
  );

  // when click on different page, set to that page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // leave for now, will use later for fetching data
  // const [message, setMessage] = useState("Loading");

  // move to context
  // useEffect(() => {
  //   fetch("http://localhost:8080/api/restaurants")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setRestaurantsData(data);
  //     });
  // }, []);

  return (
    <>
      <div className="flex flex-wrap">
        {currentRestaurants &&
          currentRestaurants.map((restaurant: Restaurant, index: number) => (
            <Card
              key={index}
              _id={restaurant._id}
              restaurant_name={restaurant.restaurant_name}
              restaurant_avg_ratings={restaurant.restaurant_avg_ratings}
              restaurant_number_reviews={restaurant.restaurant_number_reviews}
              restaurant_tags={restaurant.restaurant_tags}
              restaurant_add={restaurant.restaurant_add}
            />
          ))}
      </div>
      <div className="mt-5 flex justify-center">
        <Pagination
          restaurantsPerPage={restaurantPerPage}
          totalRestaurants={restaurantsData.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </>
  );
}
export default Restaurants;
