import express from "express";
import restaurantModels from "../models/restaurantModels";
import { RestaurantInput } from "../types/types";
import { createRestaurant } from "../helpers/helpers";

export const getRestaurant = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const restaurants = await restaurantModels.find();
    res.status(200).json(restaurants);
    // console.log("restaurants", restaurants);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).send(err.message);
  }
};

export const addRestaurant = async (
  req: express.Request,
  res: express.Response
) => {
  const restaurantInput: RestaurantInput = req.body;
  console.log("req.body", req.body);
  //   console.log("req.params", req.params);

  try {
    const restaurant = createRestaurant(restaurantInput);
    console.log("successful");
    return res.status(200).json(restaurant);
  } catch (err) {
    console.log(err);
  }
};

//find restaurant by :restaurantId
export const findRestaurant = async (
  req: express.Request,
  res: express.Response
) => {
  const restaurantId = req.params.restaurantId;
  console.log("restaurantId", restaurantId);

  try {
    const restaurant = await restaurantModels.findById(restaurantId);

    res.status(200).json(restaurant);
  } catch (error) {
    console.log("findUser error -", error);
    res.status(500).json(error);
  }
};
