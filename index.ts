import * as express from 'express';
import * as dotenv from 'dotenv';

import { ApolloServer } from 'apollo-server-express';

import { typeDefs } from './src/graphql/student/schema';

import { resolvers } from './src/graphql/student/resolvers';

dotenv.config();

const server = new ApolloServer({
	typeDefs,
	resolvers,
	playground: {
		endpoint: '/graphql',
	},
});
server.start();

const app = express();
server.applyMiddleware({ app });

app.listen({ port: process.env.PORT || 4000 });
console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
