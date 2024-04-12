import express from "express";
import cors from "cors";
import connectDB from "./db";
import "dotenv/config";

type Express = express.Application;

const server: Express = express();

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  methods: "GET, POST, PUT, DELETE",
};

server.use(cors(corsOptions));

server.get("/", (req: express.Request, res: express.Response) => {
  res.send("hello world");
});

// Connect to DB
connectDB();

export default server;
