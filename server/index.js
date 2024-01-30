const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./Routers/userRoute");
const chatRoute = require("./Routers/chatRoute");

const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Chat app apis.. homepage");
});

app.use("/api/users", userRoute);
app.use("/api/chats", chatRoute);

const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`);
});

mongoose
  .connect(uri)
  .then(() => console.log("connected to mongoDB Database"))
  .catch((error) => console.log(`MongoDB connection failed : `, error.message));
