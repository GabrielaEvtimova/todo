import { connectClient, stopClient } from "../db.js";

const main = async () => {
  const client = await connectClient();

  await client.collection("todos").deleteMany({});

  const resp = await client.collection("todos").insertMany([
    {
      id: "learn-backend",
      todoTitle: "Learn Backend",
      dueDate: Date.now(),
      description: "Learn how to setup server and use MongoDB for database",
      label: "High",
      completed: false,
    },
    {
      id: "walk-the-dog",
      todoTitle: "Walk the Dog",
      dueDate: Date.now(),
      description: "",
      label: "Medium",
      completed: false,
    },
    {
      id: "play-lol",
      todoTitle: "Play LoL",
      dueDate: Date.now(),
      description: "Play League of Legends",
      label: "Low",
      completed: false,
    },
  ]);

  console.info("Inserted Todos:", resp.insertedCount);

  stopClient();
};

main();

// Insert the test data with command: node dev/load-test-data.js in the terminal
