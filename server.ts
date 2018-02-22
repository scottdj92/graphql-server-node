import * as express from "express";
import { graphqlExpress, graphiqlExpress } from "graphql-server-express";
import * as bodyParser from "body-parser";
import { schema } from "./src/schema";

const PORT = 4000;
const server = express();

server.get("/", (req, res) => {
    res.send("hello world");
});

server.use("/graphql", bodyParser.json(), graphqlExpress({
    schema,
}));

server.use("/graphiql", graphiqlExpress({
    endpointURL: "/graphql"
}));

server.listen(PORT, () => console.log("graphql now running on port 4000"));
