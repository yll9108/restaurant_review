import express from "express";
import reviewModels from "../models/reviewModels";
import { ReviewInput } from "../types/types";
import { createReview } from "../helpers/helpers";

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
  const reviewInput: ReviewInput = req.body;
  console.log("req.body", req.body);
  //   console.log("req.params", req.params);

  try {
    const review = createReview(reviewInput);
    console.log("successful");
    return res.status(200).json(review);
  } catch (err) {
    console.log(err);
  }
};
