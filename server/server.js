import express from "express";
import router from "./api-router.js";

const server = express();

server.get("/", (req, res) => {
  res.send("hello world");
});

server.use("/api", router);

server.listen(3000, () => {
  console.info("Server is listening at http://localhost:3000");
});
