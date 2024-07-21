import { envs } from "./config/envs";
import { MongoDatabase } from "./data/mongo/init";
import AnottatorModel from "./data/mongo/models/anotattor.model";
import { AppRoutes } from "./presentation/routes";
import { Server } from "./presentation/server";

(async () => {
  main();
})();

async function main() {
  const server = new Server({
    port: envs.PORT,
    routes: AppRoutes.routes,
  });

  await MongoDatabase.connect({
    mongoUrl: envs.MONGO_URL,
    dbName: envs.MONGO_DB_NAME,
  });

  const anottator = new AnottatorModel({
    id: "123abc",
    items: [
      { name: "item1", quantity: 1 },
      { name: "item2", quantity: 2 },
    ],
  });

  await anottator.save();

  console.log("Anottator saved!");
  console.log(anottator.id);

  server.start();
}
