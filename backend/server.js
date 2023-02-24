// console.log("Server");
const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;
const { errorHandler } = require("./middleware/errorMiddleware");

//connect to database
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the Support Desk API" });
});

//Routes
app.use("/api/user", require("./Routes/userRoutes"));
app.use("/api/tickets", require("./Routes/ticketRoutes"));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
