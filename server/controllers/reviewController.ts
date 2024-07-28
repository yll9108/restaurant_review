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

//Delete reviews
export const deleteReview = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const reviewId = req.params.reviewId;
    console.log("delete review", reviewId);

    const review = await reviewModels.deleteOne({ _id: reviewId });
    if (review.deletedCount === 0) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.status(200).json({ message: "Review deleted successfully" });
  } catch (err) {
    console.error("Error deleting review:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};
