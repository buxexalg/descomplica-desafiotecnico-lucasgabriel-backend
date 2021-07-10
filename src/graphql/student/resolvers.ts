const estudante = [
	{
		name: 'Lucas',
		cpf: '05616772550',
		email: 'luquinhas123@gmail.com',
	},
];

interface StudentInterface {
	name: string;
	cpf: string;
	email: string;
}

export const resolvers = {
	Query: {
		getStudent: (): StudentInterface[] => estudante,
	},
	Mutation: {
		addStudent(
			_: StudentInterface,
			{ name, cpf, email }: StudentInterface
		): StudentInterface {
			const student = {
				name,
				cpf,
				email,
			};

			estudante.push(student);

			return student;
		},
	},
};
