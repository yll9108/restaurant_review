import express, { Router } from "express";
import { addReview, getReview } from "../controllers/reviewController";

const reviewRouter: Router = express.Router({ mergeParams: true });

reviewRouter.get("/", getReview);
reviewRouter.post("/addReview", addReview);

export default reviewRouter;
