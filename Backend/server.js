import express from "express";

// Import the dotenv package
import dotenv from "dotenv";

// Load configuration variables from .env file into process.env
dotenv.config();

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

import connectDB from "./config/db.js";

import cookieParser from "cookie-parser";

// Now you can access configuration variables using process.env
const port = process.env.PORT || 5000;

import userRoutes from "./routes/userRoutes.js";

connectDB();

const app = express();

// for body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
///

app.use(cookieParser());

app.use("/api/users", userRoutes);
app.get("/", (req, res) => res.send("<h1>Server is ready</h1>"));

app.use(notFound);
app.use(errorHandler);
app.listen(port, () => console.log(`server is started on port ${port}`));
