import { RestaurantInput, ReviewInput, UserInput } from "../types/types";
import userModels from "../models/userModels";
import restaurantModels from "../models/restaurantModels";
import reviewModels from "../models/reviewModels";

export const createUser = (values: UserInput) => {
  new userModels(values).save().then((user) => {
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

export const createReview = (values: ReviewInput) => {
  new reviewModels(values).save().then((review) => {
    review.toObject();
  });
};
