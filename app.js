import morgan from "morgan";
import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import usersRouter from "./api/apiUsers.js"
import departmentsRouter from "./api/apiDep.js";
import professorsRouter from "./api/apiProfessors.js";
export default app;


app.use(express.json());
app.use(morgan("dev"));


app.route("/").get((_req, res) => {
  res.send("Hello Lincoln!");
});

app.use("/users", usersRouter)
app.use("/professors", professorsRouter);
app.use("/departments", departmentsRouter);

app.use((_req, res) => {
  res.status(404).json({ error: "Route not found" });
});


app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: "Internal server error" });
});