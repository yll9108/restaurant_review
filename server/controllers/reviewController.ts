/* eslint-disable indent */
import express from "express";
import reviewModels from "../models/reviewModels";
import RestaurantModel from "../models/restaurantModels";

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
    const reviews = await reviewModels.find({ userId: userId });

    if (reviews.length > 0) {
      console.log("getReviewsByUserId reviews", reviews);
      res.status(200).json(reviews);
      // res.status(200).json({ message: "get reviews successfully" });
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

    //Find the restaurant containing the review
    const restaurant = await RestaurantModel.findOne({ reviewsId: reviewId });
    if (!restaurant) {
      return res
        .status(404)
        .json({ message: "Review not found in any restaurant" });
    }
    //  Remove the review ID from the restaurant's reviewsId array
    restaurant.reviewsId = restaurant.reviewsId.filter(
      (id) => id.toString() !== reviewId
    );
    // await restaurant.save();

    //Fetch all remaining reviews for the restaurant
    const remainingReviews = await reviewModels.find({
      _id: { $in: restaurant.reviewsId },
    });

    // Recalculate the average rating and the number of reviews
    const numberOfReviews = remainingReviews.length;
    const avgRating =
      numberOfReviews > 0
        ? remainingReviews.reduce(
            (sum, review) => sum + review.review_ratings,
            0
          ) / numberOfReviews
        : 0;

    //Update the restaurant with the new values
    restaurant.restaurant_avg_ratings = avgRating;
    restaurant.restaurant_number_reviews = numberOfReviews;
    await restaurant.save();

    // Delete the review itself
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
