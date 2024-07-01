import express from "express";

const router = express.Router();

const middleware = (req, res, next) => {
  console.log("this is the middleware");
  next();
};

router.get("/test", (request, response) => {
  response.send({
    message: "this is a test route",
  });
});

router.post("/test", (request, response) => {
  response.send({
    message: "this is a test POST route",
  });
});

export default router;
