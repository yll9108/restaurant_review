import { RestaurantInput, ReviewInput, UserInput } from "../types/types";
import userModels from "../models/userModels";
import restaurantModels from "../models/restaurantModels";
import reviewModels from "../models/reviewModels";

export const createUser = async (values: UserInput) => {
  console.log("createUser", values);

  const user = new userModels(values);
  const savedUser = await user.save();
  return savedUser.toObject();
};

export const validateUserInput = (
  userData: UserInput
): { result: boolean; message: string } => {
  let result = false;
  let message = "";

  if (!/^[^@]+@[^.]+\..+$/.test(userData.user_email)) {
    message = "your email address is not correct";
  } else if (!userData.user_name) {
    message = "Please enter your name";
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
