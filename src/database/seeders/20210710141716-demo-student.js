/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/no-unused-vars */

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Students', [
			{
				name: 'Joao',
				cpf: '11065340001',
				email: 'exemplo@exemplo.com',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: 'Maria',
				cpf: '90029493080',
				email: 'maria@exemplo.com',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Users', null, {});
	},
};
