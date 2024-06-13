import express, { Router } from "express";
import {
  registerUser,
  getUsers,
  getUser,
  editUser,
  deleteUser,
} from "../controllers/usersControllers";

const usersRouter: Router = express.Router();

usersRouter.post("/register", registerUser);
usersRouter.get("/", getUsers);
usersRouter.get("/:id", getUser);
usersRouter.put("/:id", editUser);
usersRouter.delete("/:id", deleteUser);

export default usersRouter;
