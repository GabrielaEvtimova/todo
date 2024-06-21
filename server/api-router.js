import express from "express";
import { connectClient } from "./db.js";
import cors from "cors";
import { ObjectId } from "mongodb";

const router = express.Router();
router.use(cors());
router.use(express.json());

// A method to get all todos from MongoDB
router.get("/todos", async (req, res) => {
  const client = await connectClient();
  const todos = await client
    .collection("todos")
    .find()
    .project({
      id: 1,
      todoTitle: 1,
      description: 1,
      dueDate: 1,
      label: 1,
      _id: 1,
    })
    .toArray();

  res.send({ todos });
});

// Add Todo
router.post("/todos", async (req, res) => {
  const client = await connectClient();

  const { todoTitle, id, label, dueDate, description } = req.body;

  const doc = await client.collection("todos").insertOne({
    todoTitle,
    id,
    label,
    dueDate,
    description,
    completed: false,
  });

  const todo = await client
    .collection("todos")
    .findOne({ _id: doc.insertedId });

  res.send({ todo });
  return todo
});

// Delete Todo

router.delete("/todos/:id", async (res, req) => {
  const id = req.req.params.id;

  const client = await connectClient();
  await client.collection("todos").deleteOne({ _id: new ObjectId(id) });

  // Note! Possible error here!
  // res.send("DELETE method called")
});

// Edit Todo

router.put("/todos/:id", async (req, res) => {
  const id = req.params.id;

  const client = await connectClient();

  const updatedTodo = {};

  if (req.body.todoTitle) {
    updatedTodo.todoTitle = req.body.todoTitle;
    updatedTodo.id = req.body.todoTitle.toLowerCase().replace(/\s/g, "-");
  }
  if (req.body.description) {
    updatedTodo.description = req.body.description;
  }
  if (req.body.label) {
    updatedTodo.label = req.body.label;
  }
  if (req.body.dueDate) {
    updatedTodo.dueDate = req.body.dueDate;
  }
  if (req.body.comleted) {
    updatedTodo.completed = req.body.dueDate;
  }

  await client.collection("todos").findOneAndUpdate(
    { _id: new ObjectId(id) },
    {
      $set: updatedTodo,
    },
    { returnDocument: "after" }
  );

  // Note! Possible error here!
  // res.send("PUT method called")
});

export default router;
