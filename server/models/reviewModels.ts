import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ReviewSchema = new Schema({
  review_ratings: {
    type: Number,
    required: true,
  },
  review_date: {
    type: String,
    required: true,
  },
  review_title: {
    type: String,
    required: true,
  },
  review_description: {
    type: String,
    required: true,
  },
  restaurantId: {
    // type: mongoose.Schema.Types.ObjectId,
    type: String,
    ref: "Restaurant", // Reference to the Restaurant model
    required: true,
  },
  userId: {
    type: String,
    ref: "User", // Reference to the User model
    required: true,
  },
});

const ReviewModel = mongoose.model("Review", ReviewSchema);

export default ReviewModel;

// const ReviewSchema = new Schema({
//   review_ratings: {
//     type: Number,
//     required: true,
//   },
//   review_date: {
//     type: String,
//     require: true,
//   },
//   review_title: {
//     type: String,
//     require: true,
//   },
//   review_description: {
//     type: String,
//     require: true,
//   },
//   restaurantId: {
//     type: String,
//     require: true,
//   },
//   userId: {
//     type: String,
//     require: true,
//   },
// });

// const ReviewModel = mongoose.model("Review", ReviewSchema);

// export default module.exports = ReviewModel;
