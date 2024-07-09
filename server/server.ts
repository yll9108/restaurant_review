import express from "express";
import cors from "cors";
import connectDB from "./db";
import "dotenv/config";
import usersRouter from "./routes/usersRoutes";
import restaurantRouter from "./routes/restaurantRoutes";
import reviewRouter from "./routes/reviewRoutes";

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  methods: "GET, POST, PUT, DELETE",
};
type Express = express.Application;

const server: Express = express();

server.use(cors(corsOptions));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static("public"));
server.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});
// Connect to DB
connectDB();

server.get("/", (req: express.Request, res: express.Response) => {
  res.send("hello world");
});

server.use("/api/users", usersRouter);
server.use("/api/restaurants", restaurantRouter);
server.use("/api/reviews", reviewRouter);
export default server;
