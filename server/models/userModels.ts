import mongoose from "mongoose";

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
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
  user_favorite_restaurant: [
    {
      type: String,
    },
  ],
  provider: {
    type: String,
  },
});

const UserModel = mongoose.model("User", UserSchema);

export default module.exports = UserModel;
