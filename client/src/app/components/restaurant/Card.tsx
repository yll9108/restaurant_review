import React from "react";
import RestaurantInfo from "./RestaurantInfo";
import Tags from "./Tags";
import Address from "./Address";
import { PartialDummyRestaurantData } from "./types";

function Card({
  name,
  ratingNum,
  reviews,
  tags,
  add,
}: PartialDummyRestaurantData) {
  return (
    // <div>
    //   {/* <div>This is card section</div> */}
    //   <div className="card w-96 bg-base-100 shadow-xl m-4">
    //     <div className="card-body">
    //       {restaurantMockData.map(
    //         (restaurant: RestaurantMockData, index: number) => (
    //           <div key={index}>
    //             <RestaurantInfo
    //               name={restaurant.name}
    //               ratingNum={restaurant.ratingNum}
    //               reviews={restaurant.reviews}
    //             />
    //             <Tags tags={restaurant.tags} />
    //             <Address add={restaurant.add} />
    //           </div>
    //         )
    //       )}
    //     </div>
    //   </div>
    // </div>
    <div>
      {/* <div>This is card section</div> */}
      <div className="card w-96 bg-base-100 shadow-xl m-4">
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

{
  /* <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div> */
}

export default Card;
