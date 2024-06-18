import { connectClient, stopClient } from "../db.js";

const main = async () => {
  const client = await connectClient();

  await client.collection("todos").deleteMany({});

  const resp = await client.collection("todos").insertMany([
    {
      id: "learn-backend",
      todoTitle: "Learn Backend",
      dueDate: new Date(),
      description: "Learn how to setup server and use MongoDB for database",
      label: "High",
    },
  ]);

  console.info("Inserted Todos:", resp.insertedCount);

  stopClient();
};

main();

// Insert the test data with command: node dev/load-test-data.js in the terminal
