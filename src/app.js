import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();

// middlewares

app.use(express.json());
app.use(express.static("public")); // used to use static assests stored in public folder
app.use(express.urlencoded());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(cors);

// routes
import userRouter from "./routes/user.routes.js";
import userDataRouter from "./routes/userData.routes.js";

app.use("/api/v1/users", userRouter);
app.use("/api/v1/user-data", userDataRouter);

export default app;
