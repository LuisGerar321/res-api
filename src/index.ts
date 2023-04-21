import { dbConnection, seedData } from "./db";
import { server } from "./server";

async function main() {
  await dbConnection();
  await seedData();
  await server();
};

main();
