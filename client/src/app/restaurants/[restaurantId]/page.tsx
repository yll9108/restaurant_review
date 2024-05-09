// import React from "react";

// function page({ params }: { params: { restaurantId: string } }) {
//   return <div>Details about restaurant {params.restaurantId}</div>;
// }

// export default page;

"use client";

import RestaurantWithMap from "@/app/components/detailPage/RestaurantWithMap";
import Card from "@/app/components/restaurant/Card";
import { dummyRestaurantList } from "@/app/components/restaurant/dummyRestaurantList";
import NoReviews from "@/app/components/review/NoReviews";
import PersonalReview from "@/app/components/review/PersonalReview";
import { dummyReviewList } from "@/app/components/review/dummyReviewList";
import { DummyRestaurantData } from "@/components/common/types";
import { RestaurantContext } from "@/context/RestaurantContext";
// import { useParams, usePathname, useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";

function Page() {
  const params = useParams();
  const restaurantId = params.restaurantId;
  const { clickedRestaurant, setClickedRestaurant } =
    useContext(RestaurantContext);
  // const { clickedRestaurant, setClickedRestaurant } =
  //   useContext(RestaurantContext);
  console.log("params", params);
  console.log("restaurantId", restaurantId);

  useEffect(() => {
    fetch(`http://localhost:8080/api/restaurants/${restaurantId}`)
      .then((response) => response.json())
      .then((data) => {
        setClickedRestaurant(data);
        console.log("data", data);
      })
      .catch((error) => {
        console.log("Error");
      });
  }, [restaurantId]);

  // const hasReviews = dummyRestaurantList.length > 0;
  const [hasReviews, setHasReviews] = useState(dummyReviewList.length > 0);
  useEffect(() => {
    setHasReviews(dummyReviewList.length > 0);
  }, []);
  // check if there's review, if yes, rendering PersonalReview, if not, rendering noReviews

  return (
    <>
      <div className="flex">
        <div className="w-2/3">
          {hasReviews ? <PersonalReview /> : <NoReviews />}
        </div>

        <div>
          <div className="text-red-800">restaurant {restaurantId}</div>
          {clickedRestaurant && (
            <RestaurantWithMap
              hasReviews={hasReviews}
              clickedRestaurant={clickedRestaurant}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Page;
