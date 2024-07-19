"use client";
import { useContext } from "react";
import { UserContext } from "@/context/UserContext";
import Card from "../restaurant/Card";
import { Restaurant } from "@/types/types";
import { RestaurantContext } from "@/context/RestaurantContext";

export default function MyFavorite() {
  const { user } = useContext(UserContext);
  const { restaurantsData } = useContext(RestaurantContext);

  const favoriteRestaurants = restaurantsData.filter(
    (restaurant: Restaurant) => {
      return user?.user_favorite_restaurant.includes(restaurant._id);
    }
  );

  return (
    <div className="flex flex-wrap">
      {favoriteRestaurants.length > 0 ? (
        favoriteRestaurants.map((restaurant: Restaurant) => (
          <Card
            key={restaurant._id}
            _id={restaurant._id}
            restaurant_name={restaurant.restaurant_name}
            restaurant_avg_ratings={restaurant.restaurant_avg_ratings}
            restaurant_number_reviews={restaurant.restaurant_number_reviews}
            restaurant_tags={restaurant.restaurant_tags}
            restaurant_add={restaurant.restaurant_add}
          />
        ))
      ) : (
        <p>No favorite restaurants found.</p>
      )}
    </div>
  );
}
