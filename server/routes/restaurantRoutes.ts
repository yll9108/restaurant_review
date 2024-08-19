import express, { Router } from "express";
import {
  addRestaurant,
  findRestaurant,
  getRestaurant,
  addNewReview,
  getRestaurantReviews,
} from "../controllers/restaurantController";

const restaurantRouter: Router = express.Router();

restaurantRouter.post("/addRestaurant", addRestaurant);
restaurantRouter.get("/", getRestaurant);
restaurantRouter.get("/:restaurantId", findRestaurant);

restaurantRouter.post("/review/:restaurantId/new", addNewReview);

restaurantRouter.get("/reviews/:restaurantId", getRestaurantReviews);

export default restaurantRouter;
