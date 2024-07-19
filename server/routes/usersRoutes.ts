import express, { Router } from "express";
import {
  registerUser,
  getUsers,
  getUser,
  editUser,
  deleteUser,
  toggleFavoriteRestaurant,
} from "../controllers/usersControllers";

const usersRouter: Router = express.Router();

usersRouter.post("/register", registerUser);
usersRouter.get("/", getUsers);
usersRouter.get("/:id", getUser);
usersRouter.put("/:id", editUser);
usersRouter.delete("/:id", deleteUser);
usersRouter.post("/:id/favorite", toggleFavoriteRestaurant);

export default usersRouter;
