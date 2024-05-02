import mongoose from "mongoose";

const Schema = mongoose.Schema;
const RestaurantSchema = new Schema({
  restaurant_name: {
    type: String,
    required: true,
  },
  restaurant_avg_ratings: {
    type: Number,
    required: true,
  },
  restaurant_add: {
    type: String,
    required: true,
  },
  restaurant_tags: {
    type: String,
    required: true,
  },
  restaurant_number_reviews: {
    type: String,
    required: true,
  },
  restaurant_reviews: {
    type: String,
    required: true,
  },
});

const RestaurantModel = mongoose.model("Restaurant", RestaurantSchema);

export default module.exports = RestaurantModel;
