import Knex from 'knex';
import * as dotenv from 'dotenv';
import config = require('../../knexfile');

dotenv.config();

export default Knex(config);
