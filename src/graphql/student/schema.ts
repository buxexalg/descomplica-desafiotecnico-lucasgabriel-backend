import { gql } from 'apollo-server-express';

// Construct a schema, using GraphQL schema language
export const typeDefs = gql`
	type Student {
		name: String
		cpf: String
		email: String
	}

	input StudentInput {
		name: String!
		cpf: String!
		email: String!
	}

	type Query {
		getStudent: [Student!]!
	}

	type Mutation {
		addStudent(name: String!, cpf: String!, email: String!): Student
	}
`;
