import { RestaurantInput, ReviewInput, UserInput } from "../types/types";
import userModels from "../models/userModels";
import restaurantModels from "../models/restaurantModels";
import reviewModels from "../models/reviewModels";

export const createUser = async (values: UserInput) => {
  return new userModels(values).save().then((user) => {
    user.toObject();
  });
};

export const validateUserInput = (
  userInput: UserInput
): { result: boolean; message: string } => {
  let result = false;
  let message = "";

  if (!userInput.user_email) {
    message = "Please enter your email address";
  } else if (!userInput.user_name) {
    message = "Please enter your name";
  } else if (!userInput.user_password) {
    message = "Please enter your password";
  } else {
    result = true;
  }

  return { result, message };
};

export const createRestaurant = (values: RestaurantInput) => {
  new restaurantModels(values).save().then((restaurant) => {
    restaurant.toObject();
  });
};

export const createReview = async (
  values: ReviewInput,
  restaurantId: string
) => {
  try {
    const reviewWithRestaurantId = { ...values, restaurantId };
    console.log("reviewWithRestaurantId", reviewWithRestaurantId);

    const review = await new reviewModels(reviewWithRestaurantId).save();
    return review.toObject();
  } catch (err) {
    throw new Error("Failed to create review");
  }
};
