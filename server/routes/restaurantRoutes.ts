import express, { Router } from "express";
import {
  addRestaurant,
  findRestaurant,
  getRestaurant,
  newReview,
  getRestaurantReviews,
} from "../controllers/restaurantController";
// import reviewRouter from "./reviewRoutes";
// import { registerUser, getUsers } from "../controllers/usersControllers";

const restaurantRouter: Router = express.Router();

restaurantRouter.post("/addRestaurant", addRestaurant);
restaurantRouter.get("/", getRestaurant);
restaurantRouter.get("/:restaurantId", findRestaurant);

restaurantRouter.post("/review/:restaurantId/new", newReview);

restaurantRouter.get("/reviews/:restaurantId", getRestaurantReviews);

// restaurantRouter.use("/:restaurantId/review", reviewRouter);

export default restaurantRouter;
