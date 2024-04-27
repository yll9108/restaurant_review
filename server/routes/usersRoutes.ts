import express, { Router } from "express";
import { registerUser, getUsers } from "../controllers/usersControllers";

const usersRouter: Router = express.Router();

usersRouter.post("/register", registerUser);
usersRouter.get("/", getUsers);

export default usersRouter;
