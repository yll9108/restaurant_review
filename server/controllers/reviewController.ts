import express from "express";
import reviewModels from "../models/reviewModels";
import { ReviewInput } from "../types/types";
import { createReview } from "../helpers/helpers";
import restaurantModels from "../models/restaurantModels";

export const getReview = async (
  req: express.Request,
  res: express.Response
) => {
  console.log("getReview", req.params);

  try {
    // Get the restaurantId from request parameters
    const restaurantId = req.params.restaurantId;
    // Ask DB to find review(s) which have this restaurantId
    const reviews: ReviewInput[] = await reviewModels.find();
    // Filter reviews based on restaurantId
    const filteredReviews = reviews.filter(
      (review) => review.restaurantId === restaurantId
    );

    if (filteredReviews.length > 0) {
      res.status(200).json(filteredReviews);
      console.log("reviews", filteredReviews);
    } else {
      res.status(404).json({ message: "No reviews found for this restaurant" });
    }
  } catch (err) {
    console.log(err);
  }
};

export const addReview = async (
  req: express.Request,
  res: express.Response
) => {
  const restaurantId = req.params.restaurantId;
  const reviewInput: ReviewInput = req.body;

  console.log("restaurantId", restaurantId);

  try {
    const restaurant = await restaurantModels.findById(restaurantId);
    if (!restaurant) {
      console.log("please select a restaurant");
      return res.status(400).json("restaurantId not exist");
    } else {
      const review = createReview(reviewInput, restaurantId);
      console.log("successful");
      return res.status(200).json(review);
    }
  } catch (err) {
    console.log(err);
  }
};
