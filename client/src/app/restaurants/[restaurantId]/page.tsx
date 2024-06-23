"use client";

import RestaurantWithMap from "@/app/components/detailPage/RestaurantWithMap";
import NoReviews from "@/app/components/review/NoReviews";
import PersonalReview from "@/app/components/review/PersonalReview";
import { Review } from "@/types/types";
import { RestaurantContext } from "@/context/RestaurantContext";
// import { useParams, usePathname, useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

function Page() {
  const params = useParams();
  const restaurantId = params.restaurantId as string;
  const { clickedRestaurant, setClickedRestaurant, setRestaurantId } =
    useContext(RestaurantContext);

  const [reviews, setReviews] = useState<Review[]>([]);
  const [hasReviews, setHasReviews] = useState<boolean>(false);

  useEffect(() => {
    setRestaurantId(restaurantId);
  }, [restaurantId, setRestaurantId]);

  // create only one function that fetch restaurant data and review data

  useEffect(() => {
    const getData = async () => {
      try {
        await axios
          .get(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/restaurants/${restaurantId}`
          )
          .then((res) => {
            console.log("1111", res.data);
            setClickedRestaurant(res.data);
          });
        await axios
          .get(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/restaurants/${restaurantId}/review/`
          )
          .then((res) => {
            console.log("2222", res.data);
            setReviews(res.data);
            if (res.data.length > 0) {
              setHasReviews(true);
            }
            console.log("hasReviews???", hasReviews);
          });
      } catch (error) {
        console.log("error", error);
      }
    };
    getData();
  }, [hasReviews, restaurantId, setClickedRestaurant]);

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
