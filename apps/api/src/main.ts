import 'reflect-metadata';
import * as express from 'express';
import { Request, Response } from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { TodoResolver } from './app/resolvers/todo.resolved';
import { dataSource } from './app/config/ormconfig';
import * as cors from 'cors';

const main = async () => {
  await dataSource.initialize();

  const app = express();

  app.use(cors());

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [TodoResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({
      req,
      res,
    }),
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app, path: '/graphql', cors: false });

  const port = process.env.port || 3333;

  app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/graphql`);
  });
};

main().catch((err) => {
  console.log(err);
});
