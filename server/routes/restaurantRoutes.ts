import express, { Router } from "express";
import {
  addRestaurant,
  getRestaurant,
} from "../controllers/restaurantController";
// import { registerUser, getUsers } from "../controllers/usersControllers";

const restaurantRouter: Router = express.Router();

restaurantRouter.post("/addRestaurant", addRestaurant);
restaurantRouter.get("/", getRestaurant);

export default restaurantRouter;
