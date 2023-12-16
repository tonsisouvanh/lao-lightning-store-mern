import express from "express";
import dotenv from "dotenv";
import colors from "colors";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running....");
});

const PORT = 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`.yellow.bold));
