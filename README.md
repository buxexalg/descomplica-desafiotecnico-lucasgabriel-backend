# Desafio Técnico Descomplica - Lucas Gabriel

## Consulta e Registro de ALunos Descomplica

Repositório referente a uma GraphQL API utilizando Typescript e Knex.js que tem como função gerenciar um banco de dados de alunos e servindo os dados para consumo do [Desafio Front-end](https://github.com/buxexalg/descomplica-desafiotecnico-lucasgabriel-frontend)

Foi feito deploy do projeto, cujo link do playground é: https://descomplica-lg-backend.herokuapp.com/graphql

# Conteúdos

-   Schema
    -   Query
    -   Mutation
-   Banco de Dados
-   Instalação
-   Variáveis de Ambiente
-   Dependências

## Schema

### Query

`getStudents`

A query tem como função retornar alunos com base em um filtro de atributos. A API irá buscar o aluno específicado caso um dos parâmetros seja enviado, `cpf`, `name` ou `email`, e caso nenhum deles seja especificado, retornará a lista completa de alunos.

##### Exemplo de Query

```gql
query getStudent($name: String, $cpf: String, $email: String) {
	getStudent(name: $name, cpf: $cpf, email: $email) {
		name
		cpf
		email
	}
}
```

### Mutation

`addStudent`

A mutation tem como função adicionar um registro de aluno no banco de dados. A API recebe, obrigatóriamente, 3 parâmetros, `cpf`, `name` ou `email`.

##### Exemplo de Mutation

```gql
mutation addStudent($name: String!, $cpf: String!, $email: String!) {
	addStudent(name: $name, cpf: $cpf, email: $email) {
		name
		cpf
		email
	}
}
```

## Instruções de Uso

Caso queira rodar o projeto localmente, você precisará ter o Docker instalado na sua máquina.

### Inicialização da aplicação

Após clonar o repositório, utilize o comando `docker-compose up` na pasta raiz da aplicação para inicializar a aplicação. A mesma será servida através da porta 4000.

### Nodemon

Caso queira rodar sua aplicação localmente através do YARN, basta utilizar o comando `npm install` para instação das dependências e em seguida `nodemon index.ts` na raiz do projeto.

## Variáveis de ambiente

### Banco de Dados

Os dados de acesso ao banco de dados devem ser inicializados dentro do arquivo `.env`, como o exemplo abaixo:

```
DB_HOST=
DB_NAME=
DB_USER=
DB_PORT=
DB_PW=
```

### Outras dependências

Após instalar o Node, execute `$ npm install` para instalar as seguintes dependências:

-   [Express](https://www.npmjs.com/package/express)
-   [Ts-node](https://www.npmjs.com/package/ts-node)
-   [Dotenv](https://www.npmjs.com/package/dotenv)
-   [Node-postgres](https://www.npmjs.com/package/pg)
-   [Eslint](https://www.npmjs.com/package/eslint)
-   [Prettier](https://www.npmjs.com/package/prettier)
-   [validator-brazil](https://www.npmjs.com/package/validator-brazil)
-   [GraphQl](https://graphql.org/)
-   [Nodemon](https://www.npmjs.com/package/nodemon)
-	[Knex.js](https://knexjs.org/)
