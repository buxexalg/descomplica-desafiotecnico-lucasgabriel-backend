import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('students', (t) => {
		t.increments('id');
		t.string('name').notNullable();
		t.string('cpf').notNullable().unique();
		t.string('email').notNullable().unique();
		t.timestamps(false, true);
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.raw('DROP TABLE students CASCADE');
}
