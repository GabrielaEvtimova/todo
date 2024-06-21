import dotenv from "dotenv";
dotenv.config();

// Server
export const port = process.env.PORT || 3000;
export const host = process.env.HOST || "localhost";
export const serverUrl = `http://${host}:${port}`;

// MongoDB
const mongoPort = process.env.MONGO_PORT || 27017;
export const mongoDbUrl = `mongodb://${host}:${mongoPort}`;
export const databaseName = process.env.MONGO_DB || "local";

// API Server
const apiPath = process.env.API_SERVER_PATH || "api";
export const apiServerUrl = `http://${host}:${port}/${apiPath}`;
