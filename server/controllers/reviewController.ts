import express from "express";
import reviewModels from "../models/reviewModels";
// import { ReviewInput } from "../types/types";
// import { createReview } from "../helpers/helpers";
// import restaurantModels from "../models/restaurantModels";

// Get all reviews
export const getReviews = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const reviews = await reviewModels.find();
    res.status(200).json(reviews);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json(err.message);
  }
};

// Get reviews by userId
export const getReviewsByUserId = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const userId = req.params.userId;
    const reviews = await reviewModels.find({ userId });
    if (reviews.length > 0) {
      res.status(200).json(reviews);
    } else {
      res.status(404).json({ message: "No reviews found for your account" });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.log(err);
  }
};
// export const getReviews = async (
//   req: express.Request,
//   res: express.Response
// ) => {
//   console.log("getReview", req.params);

//   try {
//     // Get the restaurantId from request parameters
//     const restaurantId = req.params.restaurantId;
//     console.log("restaurantId", restaurantId);

//     // Ask DB to find review(s) which have this restaurantId
//     const reviews: ReviewInput[] = await reviewModels.find({ restaurantId });

//     console.log("reviews", reviews);

//     if (reviews.length > 0) {
//       res.status(200).json(reviews);
//       console.log("reviews", reviews);
//     } else {
//       res.status(404).json({ message: "No reviews found for this restaurant" });
//     }
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// export const addReview = async (
//   req: express.Request,
//   res: express.Response
// ) => {
//   const restaurantId = req.params.restaurantId;
//   const reviewInput: ReviewInput = req.body;

//   console.log("addReview restaurantId", restaurantId);
//   console.log("addReview reviewInput", reviewInput);

//   try {
//     const restaurant = await restaurantModels.findById(restaurantId);
//     if (!restaurant) {
//       console.log("please select a restaurant");
//       return res.status(400).json("restaurantId not exist");
//     } else {
//       const review = await createReview(reviewInput, restaurantId);

//       restaurant.reviewsId.push(review._id.toString());
//       await restaurant.save();
//       console.log("successful");
//       return res.status(200).json(review);
//     }
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: "Server error" });
//   }
// };
