import express from "express";
import restaurantModels from "../models/restaurantModels";

export const getRestaurant = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const restaurants = await restaurantModels.find();
    res.status(200).json(restaurants);
    console.log("test", restaurants);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).send(err.message);
  }
};
