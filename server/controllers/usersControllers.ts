import express from "express";
import UserModel from "../models/userModels";
import { UserInput } from "../types/types";
import { createUser, validateUserInput } from "../helpers/helpers";

export const registerUser = async (
  req: express.Request,
  res: express.Response
) => {
  const userInput: UserInput = req.body;
  console.log("registerUser", userInput);

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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).send(err.message);
  }
};

export const getUser = async (req: express.Request, res: express.Response) => {
  // console.log("getUsr", req.params);

  const userId = req.params.id;
  // console.log("userId: ", userId);

  try {
    const user = await UserModel.findById(userId);
    res.status(200).json(user);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).send(err.message);
  }
};

export const editUser = async (req: express.Request, res: express.Response) => {
  const userId = req.params.id;
  console.log("editUser", userId);
  if (!userId) {
    res.status(404).send("User not found");
  } else {
    try {
      const updateData = req.body;
      console.log("updateData", updateData);

      const editUser = await UserModel.findByIdAndUpdate(userId, updateData, {
        new: true,
      });

      res.status(200).json(editUser);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      res.status(500).send(err.message);
    }
  }
};

export const deleteUser = async (
  req: express.Request,
  res: express.Response
) => {
  const userId = req.params.id;
  console.log("deleteUser", userId);

  if (!userId) {
    res.status(404).send("Delete user not found");
  } else {
    try {
      const deleteUser = await UserModel.findByIdAndDelete(userId);
      res.status(200).json(deleteUser);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      res.status(500).send(err.message);
    }
  }
};
