import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import testRouter from "./routes/testRoute.js";
import postRouter from "./routes/postsRouter.js";
import "dotenv/config";

const app = express();

const addMiddlewares = () => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
};

const startServer = () => {
  const port = process.env.port || 5000;
  app.listen(port, () => {
    console.log("server is running on  :>> ", port, "port");
    console.log("Baseurl : http://localhost:5000/api/");
  });
};

const loadRoutes = () => {
  app.use("/", (req, res, next) => {
    console.log(req.method, req.path);
    next();
  });
  app.use("/api", testRouter);
  app.use("/api/posts", postRouter);
};

const DBconnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log("connection with DB established ");
  } catch (error) {
    console.log("error :>> ", error);
    console.log("can not connect with DB ");
  }
};

// IIFE immediate invogue function expression (function calls itself)

(async function controller() {
  await DBconnection();
  addMiddlewares();
  loadRoutes();
  startServer();
})();