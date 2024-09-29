const { Pool } = require('pg');

// TODO: move to configs.js / process.evv
const connectionOptions = {
  user: 'postgres',
  password: 'admin',
  host: 'localhost',
  port: 5432,
  database: 'phones_sales',
};

const pool = new Pool(connectionOptions);

// Завершити з'єднання з БД при завершенні роботи застосунку
process.on('beforeExit', () => pool.end());
