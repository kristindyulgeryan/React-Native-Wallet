import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("It is working");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("server is running on port:", PORT);
});
