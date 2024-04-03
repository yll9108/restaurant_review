import express from "express";
import cors from "cors";
// import connectDB from "./modles/db";
const app = express();
const PORT = 8080;

app.use(cors());

// app.get("/api/home", (req, res) => {
//   res.json({ message: "Hello World" });
// });

// app.get("/api/login", async (req: express.Request, res: express.Response) => {
//   const collection = await connectDB.collection("users");
//   const results = await collection.find({}).toArray();
//   res.send(results).status(200);
// });
app.listen(PORT, () => {
  console.log(`Server started on port http://localhost:${PORT}`);
});
