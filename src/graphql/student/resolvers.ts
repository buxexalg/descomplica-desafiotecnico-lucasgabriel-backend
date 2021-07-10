import { isCpf } from 'validator-brazil';
import { validate } from 'email-validator';
import { UserInputError } from 'apollo-server-express';

import db from '../../database/knex';

interface StudentInterface {
	name: string;
	cpf: string;
	email: string;
}

export const resolvers = {
	Query: {
		getStudent: (): any => db('students').select(),
	},
	Mutation: {
		async addStudent(
			_: StudentInterface,
			{ name, cpf, email }: StudentInterface
		): Promise<StudentInterface> {
			if (!isCpf(cpf)) {
				throw new UserInputError('Invalid cpf value', {
					argumentName: 'cpf',
				});
			}

			if (!validate(email)) {
				throw new UserInputError('Invalid email value', {
					argumentName: 'email',
				});
			}

			const student = {
				name,
				cpf,
				email,
			};

			await db('students').insert(student).table('students');

			return student;
		},
	},
};
