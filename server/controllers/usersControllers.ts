import express from "express";
import UserModel from "../models/userModels";
import { UserInput } from "../types/types";

export const registerUser = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const userInput: UserInput = req.body;
    if (
      !userInput.user_name ||
      !userInput.user_email ||
      !userInput.user_password
    ) {
      res.send(404);
    }
  } catch (err) {
    console.log(err);
  }
};

export const getUsers = async (req: express.Request, res: express.Response) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
    console.log("test", users);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).send(err.message);
  }
};
