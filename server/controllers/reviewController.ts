import express from "express";
import reviewModels from "../models/reviewModels";
import { ReviewInput } from "../types/types";
import { createReview } from "../helpers/helpers";
import restaurantModels from "../models/restaurantModels";

export const getReview = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const review = await reviewModels.find();
    res.status(200).json(review);
    console.log("review", review);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).send(err.message);
  }
};

export const addReview = async (
  req: express.Request,
  res: express.Response
) => {
  const restaurantId = req.params.restaurantId;
  const reviewInput: ReviewInput = req.body;
  console.log("req.body", req.body);
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
