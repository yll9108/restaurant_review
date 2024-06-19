import express, { Router } from "express";
import {
  addRestaurant,
  findRestaurant,
  getRestaurant,
  // getSearchResults,
} from "../controllers/restaurantController";
import reviewRouter from "./reviewRoutes";
// import { registerUser, getUsers } from "../controllers/usersControllers";

const restaurantRouter: Router = express.Router();

restaurantRouter.post("/addRestaurant", addRestaurant);
restaurantRouter.get("/", getRestaurant);
restaurantRouter.get("/:restaurantId", findRestaurant);
// restaurantRouter.get("/search/", getSearchResults);

restaurantRouter.use("/:restaurantId/review", reviewRouter);

export default restaurantRouter;
