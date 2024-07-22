import { createServer } from 'http';
import { envs } from './config/envs';
import { AppRoutes } from './presentation/routes';
import { Server } from './presentation/server';
import { WssService } from './presentation/services';
import { MongoDatabase } from './data';

(async () => {
  main();
})();

async function main() {
  const server = new Server({
    port: envs.PORT,
  });

  await MongoDatabase.connect({
    mongoUrl: envs.MONGO_URL,
    dbName: envs.MONGO_DB_NAME,
  });

  const httpServer = createServer(server.app);
  WssService.initWss({ server: httpServer });

  server.setRoutes(AppRoutes.routes);

  httpServer.listen(envs.PORT, () => {
    console.log(`Server running on port: ${envs.PORT}`);
  });
}
