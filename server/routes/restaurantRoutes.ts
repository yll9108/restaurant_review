import express, { Router } from "express";
import { getRestaurant } from "../controllers/restaurantController";
// import { registerUser, getUsers } from "../controllers/usersControllers";

const restaurantRouter: Router = express.Router();

// restaurantRouter.post("/register", registerUser);
restaurantRouter.get("/", getRestaurant);

export default restaurantRouter;
