import express from "express";
import restaurantModels from "../models/restaurantModels";
import { RestaurantInput, ReviewInput } from "../types/types";
import { createRestaurant, createReview } from "../helpers/helpers";
import reviewModels from "../models/reviewModels";

export const getRestaurant = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const text =
      req.query.text !== undefined
        ? req.query.text.toString().toUpperCase()
        : "";
    if (text) {
      const searchRegex = new RegExp(text, "i"); // Create a case-insensitive regex
      const restaurants = await restaurantModels.find({
        restaurant_name: searchRegex,
      }); // Assuming you're searching by name
      res.status(200).json(restaurants);
    } else {
      const restaurants = await restaurantModels.find();
      res.status(200).json(restaurants);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).send(err.message);
  }
};

export const addRestaurant = async (
  req: express.Request,
  res: express.Response
) => {
  const restaurantInput: RestaurantInput = req.body;

  try {
    const restaurant = createRestaurant(restaurantInput);
    console.log("successful");
    return res.status(200).json(restaurant);
  } catch (err) {
    console.log(err);
  }
};

//find restaurant by :restaurantId
export const findRestaurant = async (
  req: express.Request,
  res: express.Response
) => {
  const restaurantId = req.params.restaurantId;

  try {
    const restaurant = await restaurantModels.findById(restaurantId);

    res.status(200).json(restaurant);
  } catch (error) {
    console.log("findUser error -", error);
    res.status(500).json(error);
  }
};

export const getRestaurantReviews = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    // Get the restaurantId from request parameters
    const restaurantId = req.params.restaurantId;

    // Ask DB to find review(s) which have this restaurantId
    const reviews: ReviewInput[] = await reviewModels
      .find({
        restaurantId,
      })
      .exec();

    console.log("reviews", reviews);

    if (reviews.length > 0) {
      res.status(200).json(reviews);
    } else {
      res.status(404).json({ message: "No reviews found for this restaurant" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const addNewReview = async (
  req: express.Request,
  res: express.Response
) => {
  const restaurantId = req.params.restaurantId;
  const reviewInput: ReviewInput = req.body;

  console.log("addReview restaurantId", restaurantId);
  console.log("addReview reviewInput", reviewInput);

  try {
    const restaurant = await restaurantModels.findById(restaurantId);
    if (!restaurant) {
      console.log("please select a restaurant");
      return res.status(400).json("restaurantId not exist");
    } else {
      const review = await createReview(reviewInput, restaurantId);

      restaurant.reviewsId.push(review._id.toString());

      //  Update the restaurant's average rating and number of reviews
      const newNumberOfReviews = restaurant.restaurant_number_reviews + 1;
      const newAvgRating =
        (restaurant.restaurant_avg_ratings *
          restaurant.restaurant_number_reviews +
          reviewInput.review_ratings) /
        newNumberOfReviews;

      restaurant.restaurant_number_reviews = newNumberOfReviews;
      restaurant.restaurant_avg_ratings = Math.round(newAvgRating * 10) / 10;

      await restaurant.save();
      return res.status(200).json({ message: "add review successfully" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};
