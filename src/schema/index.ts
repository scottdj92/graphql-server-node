import mutations from "./root/mutations";
import queries from "./root/queries";
import { importSchema } from "graphql-import";
import { makeExecutableSchema } from "graphql-tools";
import { join } from "path";

const resolvers = Object.assign(mutations, queries);
const typeDefs = importSchema(join(__dirname, "root/schema.graphql"));

export default makeExecutableSchema({typeDefs, resolvers});
