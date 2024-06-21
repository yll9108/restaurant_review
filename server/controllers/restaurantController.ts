import express from "express";
import restaurantModels from "../models/restaurantModels";
import { RestaurantInput } from "../types/types";
import { createRestaurant } from "../helpers/helpers";

export const getRestaurant = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const text =
      req.query.text !== undefined
        ? req.query.text.toString().toUpperCase()
        : "";
    if (text) {
      const searchRegex = new RegExp(text, "i"); // Create a case-insensitive regex
      console.log("searchRegex", searchRegex);

      const restaurants = await restaurantModels.find({
        restaurant_name: searchRegex,
      }); // Assuming you're searching by name
      res.status(200).json(restaurants);
    } else {
      const restaurants = await restaurantModels.find();
      res.status(200).json(restaurants);
    }

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
