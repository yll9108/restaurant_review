import express, { Router } from "express";
import {
  registerUser,
  getUsers,
  getUser,
} from "../controllers/usersControllers";

const usersRouter: Router = express.Router();

usersRouter.post("/register", registerUser);
usersRouter.get("/", getUsers);
usersRouter.get("/:id", getUser);

export default usersRouter;
