import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ReviewSchema = new Schema({
  review_ratings: {
    type: Number,
    required: true,
  },
  reviews_date: {
    type: Date,
    require: true,
  },
  review_title: {
    type: String,
    require: true,
  },
  review_description: {
    type: String,
    require: true,
  },
  restaurantId: {
    type: String,
    require: true,
  },
  userId: {
    type: String,
    require: true,
  },
});

const ReviewModel = mongoose.model("Review", ReviewSchema);

export default module.exports = ReviewModel;
