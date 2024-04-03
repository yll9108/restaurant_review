import mongoose from "mongoose";
import "dotenv/config";
const connectDB = async () => {
  try {
    await mongoose.connect(String(process.env.DB_API_KEY));
    console.log("success mongoDB");
  } catch (err) {
    console.log("Failure: Unconnected to Mongo DB");
    throw new Error();
  }
};

export default connectDB;
