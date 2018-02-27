import * as express from "express";
import { graphqlExpress, graphiqlExpress } from "graphql-server-express";
import * as bodyParser from "body-parser";
import schema from "./src/schema";
import * as cors from "cors";
import database from "./database";
// tslint:disable-next-line:no-var-requires
require("dotenv").config();

database(process.env.DEFAULT_CONNECTION, true).then( () => {
    const PORT = 4000;
    const server = express();

    server.use("*", cors({ origin: "http://localhost:3000"}));

    server.use("/graphql", bodyParser.json(), graphqlExpress({
        schema,
    }));

    server.use("/graphiql", graphiqlExpress({
        endpointURL: "/graphql",
    }));

    server.listen(PORT, () => console.log(`graphql now running on port ${PORT}`));
});
