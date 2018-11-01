import { makeExecutableSchema } from "graphql-tools";
import { createFetch } from "relay-local-schema";
import { Environment, RecordSource, Store, Network } from "relay-runtime";

// eslint-disable-next-line
import typeDefs from "!raw-loader!./schema.graphql";

let counter = 0;

const items = () => {
  counter++;
  return {
    edges: [
      {
        node: {
          id: counter,
          name: `Item ${counter}`
        },
        cursor: counter
      }
    ],
    pageInfo: {
      endCursor: counter,
      hasNextPage: true
    }
  };
};

const resolvers = {
  Query: {
    me: () => ({ id: "me", username: "Vinh" }),
    list: () => ({ items })
  }
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export default new Environment({
  network: Network.create(createFetch({ schema })),
  store: new Store(new RecordSource())
});
