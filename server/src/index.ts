import express from "express";
import { ApolloServer } from "apollo-server-express";
import { schema } from './graphql';

const server = new ApolloServer({ schema });

const app = express();
const port = 9000;
//const server = new ApolloServer();

server.applyMiddleware({ app, path: "/api" });
app.listen(port);

console.log(`[app] : http://localhost:${port}`);