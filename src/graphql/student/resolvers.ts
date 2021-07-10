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
