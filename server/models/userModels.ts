import mongoose from "mongoose";

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  user_name: {
    type: String,
    required: true,
  },
  user_picture: {
    type: String,
    default: "",
  },
  user_email: {
    type: String,
    required: true,
  },
  user_password: {
    type: String,
    required: true,
  },
  user_favorite_restaurant: [
    {
      type: String,
    },
  ],
});

const UserModel = mongoose.model("User", UserSchema);

export default module.exports = UserModel;
