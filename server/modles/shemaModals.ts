import mongoose from "mongoose";

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  user_name: {
    type: String,
  },
  user_picture: {
    type: Number,
  },
  user_email: {
    type: String,
  },
  user_password: {
    type: String,
  },
  user_favorite_restaurant: {
    type: String,
  },
});

export const UserModal =
  mongoose.models.User || mongoose.model("User", UserSchema);
