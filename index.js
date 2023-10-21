process.on("uncaughtException", (err) => {
    console.log("error", err);
  });
import express from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";
import { initApp } from "./src/app.router.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use(morgan("dev"));
initApp(app,express)
const port = 5000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
// Handle rejection outside express
process.on("unhandledRejection", (err) => {
    console.error(`UnhandledRejection Errors: ${err.name} | ${err.message}`);
    server.close(() => {
      console.error(`Shutting down....`);
      process.exit(1);
    });
  });
  