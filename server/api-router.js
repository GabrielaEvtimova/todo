import express from "express";
import { connectClient } from "./db.js";
import cors from "cors";

const router = express.Router();
router.use(cors());
router.use(express.json());

// A method to get all todos from MongoDB
router.get("/todos", async (req, res) => {
  const client = await connectClient();
  console.log(client)
  const todos = await client
    .collection("todos")
    .find()
    .project({
      id: 1,
      todoTitle: 1,
      description: 1,
      dueDate: 1,
      label: 1,
      _id: 0,
    })
    .toArray();

  res.send({ todos });
});

router.post("/todos", async (req, res) => {
    

})
export default router;
