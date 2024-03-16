// import React from "react";

// function page({ params }: { params: { restaurantId: string } }) {
//   return <div>Details about restaurant {params.restaurantId}</div>;
// }

// export default page;

"use client";

import RestaurantWithMap from "@/app/components/detailPage/RestaurantWithMap";
import Card from "@/app/components/restaurant/Card";
import NoReviews from "@/app/components/review/NoReviews";
import PersonalReview from "@/app/components/review/PersonalReview";
import { DummyRestaurantData } from "@/components/common/types";
// import { useParams, usePathname, useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { useState } from "react";

function Page() {
  const params = useParams();
  // console.log("params", params);

  const [noReviews, setNoReviews] = useState(false);
  // check if there's review, if yes, rendering PersonalReview, if not, rendering noReviews

  return (
    <>
      <div className="flex">
        <div className="w-2/3">
          {noReviews ? <NoReviews /> : <PersonalReview />}
        </div>
        <div>
          <div className="text-red-800">restaurant {params.restaurantId}</div>
          <RestaurantWithMap noReviews={noReviews} />
        </div>
      </div>
    </>
  );
}

export default Page;
