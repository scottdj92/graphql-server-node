import mutations from "./root/mutations";
import queries from "./root/queries";
import subscriptions from "./root/subscriptions";
import { importSchema } from "graphql-import";
import { makeExecutableSchema } from "graphql-tools";
import ChannelResolver from "./types/channel/resolver";
import MetadataResolver from "./types/metadata/resolver";
import { join } from "path";

const resolvers = Object.assign(mutations, queries, subscriptions, ChannelResolver, MetadataResolver);
const typeDefs = importSchema(join(__dirname, "root/schema.graphql"));

export default makeExecutableSchema({typeDefs, resolvers});
