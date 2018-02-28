import * as express from "express";
import { graphqlExpress, graphiqlExpress } from "graphql-server-express";
import * as bodyParser from "body-parser";
import schema from "./src/schema";
import * as cors from "cors";
import database from "./database";
import { createServer } from "http";
import { execute, subscribe } from "graphql";
import { SubscriptionServer } from "subscriptions-transport-ws";
// tslint:disable-next-line:no-var-requires
require("dotenv").config();

database(process.env.DEFAULT_CONNECTION, true).then( () => {
    const PORT = 4000;
    const server = express();
    // const ws = createServer(server);

    server.use("*", cors({ origin: "http://localhost:3000"}));

    server.use("/graphql", bodyParser.json(), graphqlExpress({
        schema,
    }));

    server.use("/graphiql", graphiqlExpress({
        endpointURL: "/graphql",
        subscriptionsEndpoint: "ws://localhost:4000/subscriptions",
    }));

    server.listen(PORT, () => console.log(`graphql now running on port ${PORT}`));

    // ws.listen(PORT, () => {
    //     console.log(`graphql subscriptions running on ${PORT}/subscriptions`);

    //     // tslint:disable-next-line:no-unused-expression
    //     new SubscriptionServer({
    //         execute,
    //         subscribe,
    //         schema,
    //     }, {
    //         server: ws,
    //         path: "/subscriptions",
    //     });
    // });
});
