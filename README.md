# gql-server-poc
A proof of concept for a graphql server using express and a local postgres db

## Getting started
create a `.env` file as follows:

```
DEFAULT_CONNECTION="postgres://USERNAME:PASS@localhost:PORT/gql"
```
for psql

Run `npm run build` to compile all .ts files.

Run `npm run dev` to run the dev server on port 4000. Navigate to `/graphiql` to use the GraphiQL interface.


## How does it work?
This server is built on a connection to a database. Once the database is connected, it will fire up the express server. See `server.ts` for implementation details.

`/core` contains all of the entity models for the Sequelize database.
If you want to add more entity models, you must import them to `/database` and pass them to the array in `index.ts`.

The entire GQL schema is defined in `src/schema/index.ts`. This is where we parse all of our .graphql files and make them executable by GraphQL.

`schema/root` contains our root GQL schema along with all queries and mutations.

`schema/types` contains all our nested types, grouped by domain. Each folder will have its own `schema.graphql` and `resolvers.ts` file.
