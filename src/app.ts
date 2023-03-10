import "express-async-errors";
import express, { Application } from "express";
import { handleErrors } from "./errors";
import loginRoutes from "./routes/login.routes";
import userRoutes from "./routes/users.routes";

const app: Application = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/login", loginRoutes);

app.use(handleErrors)

export default app;
