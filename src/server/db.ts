import { MongoClient } from "mongodb";

import { MONGODB_URI, DATABASE_NAME } from "./config";

let connectedClient;

export const connectClient = async () => {
  if (connectedClient) {
    return connectedClient.db(DATABASE_NAME);
  }

  const client = new MongoClient(MONGODB_URI);
  //async call
  await client.connect();
  await client.db(DATABASE_NAME).command({ ping: 1 });
  console.info("Connected to MongoDB");

  return client.db(DATABASE_NAME);
};

export const stopClient = async () => {
  await connectedClient?.close();
};
