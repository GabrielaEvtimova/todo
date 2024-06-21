import { MongoClient } from "mongodb";
import { databaseName, mongoDbUrl } from "./config.js";

let connectedClient;

export const connectClient = async () => {
  if (connectedClient) {
    return connectedClient.db(databaseName);
  }

  const client = new MongoClient(mongoDbUrl);
  await client.connect();
  await client.db(databaseName).command({ ping: 1 });
  console.info("Connected to MongoDB");

  connectedClient = client;

  return connectedClient.db(databaseName);
};

export const stopClient = async () => {
  await connectedClient?.close();
};
