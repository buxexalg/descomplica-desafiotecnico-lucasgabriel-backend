import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
	// Deletes ALL existing entries
	await knex('students').del();

	// Inserts seed entries
	await knex('students').insert([
		{
			name: 'Joao Gabriel',
			cpf: '80479213046',
			email: 'exemplo@exemplo.com',
		},
		{
			name: 'Maria',
			cpf: '30552892009',
			email: 'maria@exemplo.com',
		},
		{
			name: 'Fernando Souza',
			cpf: '08050722090',
			email: 'fernando@exemplo.com',
		},
		{
			name: 'Wilma Carla',
			cpf: '87619667032',
			email: 'wilma@exemplo.com',
		},
		{
			name: 'Ruth Assis',
			cpf: '23677605008',
			email: 'ruth@exemplo.com',
		},
		{
			name: 'Raquel Farias',
			cpf: '23256675026',
			email: 'raquel@exemplo.com',
		},
		{
			name: 'Daniela Gurgel',
			cpf: '20188949003',
			email: 'daniela@exemplo.com',
		},
		{
			name: 'Ramon Bogea',
			cpf: '40743312090',
			email: 'ramon@exemplo.com',
		},
		{
			name: 'Alice Fatima',
			cpf: '18231919082',
			email: 'alice@exemplo.com',
		},
		{
			name: 'Misael Pessoa',
			cpf: '73618360037',
			email: 'misael@exemplo.com',
		},
	]);
}
