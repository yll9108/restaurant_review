import mongoose from "mongoose";

export type UserInput = {
  _id: string;
  user_name: string;
  user_picture?: string;
  user_email: string;
  user_password: string;
  user_favorite_restaurant?: mongoose.Schema.Types.ObjectId[];
  provider?: string;
};

export type RestaurantInput = {
  restaurant_name: string;
  restaurant_avg_ratings: number;
  restaurant_add: string;
  restaurant_tags: string;
  restaurant_number_reviews: number;
  restaurant_reviews: string;
};

export type ReviewInput = {
  review_ratings: number;
  review_date: string;
  review_title: string;
  review_description: string;
  restaurantId: string;
  userId: string;
};
