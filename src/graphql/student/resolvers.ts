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
		getStudent: async (
			_: StudentInterface,
			args: StudentInterface
		): Promise<StudentInterface[]> => {
			const { name, cpf, email } = args;

			if (!name && !cpf && !email) {
				return db('students').select();
			}

			const studentInfo: StudentInterface[] = [];

			if (cpf) {
				const info = await db('students').where({ cpf }).first();
				studentInfo.push(info);
			} else if (email) {
				const info = await db('students').where({ name }).first();
				studentInfo.push(info);
			} else if (name) {
				return db('students').where({ name }).select();
			}

			return studentInfo;
		},
	},
	Mutation: {
		async addStudent(
			_: StudentInterface,
			{ name, cpf, email }: StudentInterface
		): Promise<StudentInterface> {
			if (!name) {
				throw new UserInputError('Please insert a name value', {
					argumentName: 'name',
				});
			}

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
