import express from "express";
import UserModel from "../models/userModels";
import { UserInput } from "../types/types";
import { createUser, validateUserInput } from "../helpers/helpers";
import ReviewModel from "../models/reviewModels";
import RestaurantModel from "../models/restaurantModels";

export const registerUser = async (
  req: express.Request,
  res: express.Response
) => {
  const userInput: UserInput = req.body;

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
  const userId = req.params.id;

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
  if (!userId) {
    res.status(404).send("User not found");
  } else {
    try {
      const updateData = req.body;
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

  if (!userId) {
    res.status(404).send("Delete user not found");
  } else {
    try {
      // Find all reviews associated with the user
      const userReviews = await ReviewModel.find({ userId: userId });

      // Extract the review IDs
      const reviewIds = userReviews.map((review) => review._id.toString());
      const restaurantIds = userReviews.map((review) => review.restaurantId);

      // Delete all reviews associated with the user
      await ReviewModel.deleteMany({ userId: userId });

      // Update the Restaurant models to remove references to these reviews
      await RestaurantModel.updateMany(
        { reviewsId: { $in: reviewIds } },
        { $pull: { reviewsId: { $in: reviewIds } } }
      );

      // Recalculate ratings and number of reviews for each affected restaurant
      for (const restaurantId of restaurantIds) {
        const restaurantReviews = await ReviewModel.find({
          restaurantId: restaurantId,
        });

        const numberOfReviews = restaurantReviews.length;
        const avgRating =
          restaurantReviews.reduce(
            (sum, review) => sum + review.review_ratings,
            0
          ) / numberOfReviews || 0;

        await RestaurantModel.findByIdAndUpdate(restaurantId, {
          restaurant_number_reviews: numberOfReviews,
          restaurant_avg_ratings: avgRating,
        });
      }

      // Delete the user
      const deleteUser = await UserModel.findByIdAndDelete(userId);
      if (!deleteUser) {
        res.status(404).send("User not found");
      } else {
        res.status(200).json(deleteUser);
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      res.status(500).send(err.message);
    }
  }
};

export const toggleFavoriteRestaurant = async (
  req: express.Request,
  res: express.Response
) => {
  const userId = req.params.id;
  const { restaurantId } = req.body;

  try {
    const user = await UserModel.findById(userId);

    if (!user) {
      res.status(404).send("User not found");
      return;
    }
    const favoriteIndex = user.user_favorite_restaurant.indexOf(restaurantId);

    if (favoriteIndex === -1) {
      user.user_favorite_restaurant.push(restaurantId);
    } else {
      user.user_favorite_restaurant.splice(favoriteIndex, 1);
    }

    await user.save();
    res.status(200).json(user);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).send(err.message);
  }
};
