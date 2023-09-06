import express, { Application } from "express";
import morgan from "morgan";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

import sequelize from "./config/database";
import router from "./routes/school.routes";
import paymentRouter from "./routes/payment.routes"

const app: Application = express();



app.use(express.json());
app.use(morgan("dev"));
app.use(router);
app.use(paymentRouter);

const port: number = parseInt(process.env.PORT || "4401", 10);

app.listen(port, () => {
   sequelize
  .sync({})
  .then(() => console.log("Database connected successfully"))
  .catch((err) => {
    console.error(err);
  });
  console.log("Server started");
});
