"use client";

import RestaurantWithMap from "@/app/components/detailPage/RestaurantWithMap";
import NoReviews from "@/app/components/review/NoReviews";
import PersonalReview from "@/app/components/review/PersonalReview";
import { Review } from "@/components/common/types";
import { RestaurantContext } from "@/context/RestaurantContext";
// import { useParams, usePathname, useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";

function Page() {
  const params = useParams();
  const restaurantId = params.restaurantId as string;
  const { clickedRestaurant, setClickedRestaurant, setRestaurantId } =
    useContext(RestaurantContext);

  const [reviews, setReviews] = useState<Review[]>([]);
  const [hasReviews, setHasReviews] = useState<boolean>(false);

  // useEffect(() => {
  //   setRestaurantId(restaurantId);
  // }, [restaurantId, setRestaurantId]);

  // create only one function that fetch restaurant data and review data
  const getData = async () => {
    try {
      await fetch(`http://localhost:8080/api/restaurants/${restaurantId}`)
        .then((response) => response.json())
        .then((data) => {
          console.log("1111", data);
          setClickedRestaurant(data);
        });
      await fetch(
        `http://localhost:8080/api/restaurants/${restaurantId}/review/`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("2222", data);
          setReviews(data);
          if (data.length > 0) {
            setHasReviews(true);
          }
          console.log("hasReviews???", hasReviews);
        });
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="flex">
        <div className="w-2/3">
          {hasReviews ? <PersonalReview reviews={reviews} /> : <NoReviews />}
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
