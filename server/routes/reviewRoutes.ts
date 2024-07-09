import express, { Router } from "express";
import {
  getReviews,
  getReviewsByUserId,
} from "../controllers/reviewController";

const reviewRouter: Router = express.Router({ mergeParams: true });

reviewRouter.get("/", getReviews);
reviewRouter.get("/:userId", getReviewsByUserId);
// reviewRouter.post("/addReview", addReview);

export default reviewRouter;
