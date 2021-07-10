import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
	// Deletes ALL existing entries
	await knex('students').del();

	// Inserts seed entries
	await knex('students').insert([
		{
			id: 1,
			name: 'Joao Gabri',
			cpf: '11065340001',
			email: 'exemplo@exemplo.com',
		},
		{
			id: 2,
			name: 'Maria',
			cpf: '90029493080',
			email: 'maria@exemplo.com',
		},
	]);
}
