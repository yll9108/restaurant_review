import express from "express";
import UserModel from "../models/userModels";

export const getUsers = async (req: express.Request, res: express.Response) => {
  try {
    console.log("test");

    const users = await UserModel.find();
    res.status(200).json(users);
    console.log("test", users);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).send(err.message);
  }
};
