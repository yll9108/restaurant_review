import express, { Router } from "express";
import {
  getReviews,
  getReviewsByUserId,
  deleteReview,
} from "../controllers/reviewController";

const reviewRouter: Router = express.Router({ mergeParams: true });

reviewRouter.get("/", getReviews);
reviewRouter.get("/:userId", getReviewsByUserId);
reviewRouter.delete("/:reviewId", deleteReview);

export default reviewRouter;
