import { UserInput } from "../types/types";

export const validateUserInput = (
  userInput: UserInput
): { result: boolean; message: string } => {
  let result = false;
  let message = "";
  if (!userInput.user_email) {
    message = "Please enter your email address";
  } else {
    result = true;
  }
  return { result, message };
};
