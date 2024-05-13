import express from "express";
import UserModel from "../models/userModels";
import { UserInput } from "../types/types";
import { createUser, validateUserInput } from "../helpers/helpers";

export const registerUser = async (
  req: express.Request,
  res: express.Response
) => {
  const userInput: UserInput = req.body;
  console.log("users ", req.body);
  console.log("users email", req.body.user_email);
  console.log("users name", req.body.user_name);
  console.log("users password", req.body.user_password);
  console.log("users picture", req.body.user_picture);
  console.log("users restaurant", req.body.user_favorite_restaurant);

  // console.log("email: ", userInput.user_email);
  const { result, message } = validateUserInput(userInput);
  if (!result) {
    res.status(500).send(message);
    return;
  }

  try {
    const user = await createUser(userInput);
    return res.status(200).json(user);
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
