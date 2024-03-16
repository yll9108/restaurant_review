"use client"; // tell react this is a client component

import React, { useEffect, useState } from "react";
import Card from "./Card";
import Pagination from "./Pagination";
import { DummyRestaurantData } from "@/components/common/types";

function Restaurants() {
  // const [message, setMessage] = useState("Loading");
  // useEffect(() => {
  //   fetch("http://localhost:8080/api/home")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setMessage(data.message);
  //     });
  // }, []);

  const dummyRestaurantList: DummyRestaurantData[] = [
    {
      id: 1,
      name: "Saku",
      ratingNum: 5,
      reviews: 120,
      tags: "Japanese",
      add: "567 Clarke Rd #107, Coquitlam, BC V3J 0K7",
      mapString: "mockMap.png",
    },
    {
      id: 2,
      name: "Haruua",
      ratingNum: 5,
      reviews: 120,
      tags: "Spanish",
      add: "Vancouver, BC V3J 0K7",
      mapString: "mockMap.png",
    },
  ];

  return (
    <>
      <div className="flex flex-wrap">
        {dummyRestaurantList &&
          dummyRestaurantList.map(
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
        <Pagination />
      </div>
    </>
  );
}
export default Restaurants;
