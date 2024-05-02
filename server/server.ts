import express from "express";
import cors from "cors";
import connectDB from "./db";
import "dotenv/config";
import usersRouter from "./routes/usersRoutes";
import restaurantRouter from "./routes/restaurantRoutes";
type Express = express.Application;

const server: Express = express();
const corsOptions = {
  origin: process.env.FRONTEND_URL,
  methods: "GET, POST, PUT, DELETE",
};

server.use(cors(corsOptions));
server.use(express.json());

// Connect to DB
connectDB();

server.get("/", (req: express.Request, res: express.Response) => {
  res.send("hello world");
});

server.use("/api/users", usersRouter);
server.use("/api/restaurants", restaurantRouter);
export default server;
