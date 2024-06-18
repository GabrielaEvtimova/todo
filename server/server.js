import express from "express";

const server = express();

server.get("/", (req, res) => {
  res.send("hello world");
});

server.listen(3000, () => {
  console.info("Server is listening at http://localhost:3000");
});
