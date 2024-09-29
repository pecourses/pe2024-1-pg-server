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

// ---------------------------------------
// promises then/catch
pool
  .query('SELECT CURRENT_DATE')
  .then(result => console.log('then:', result.rows[0]))
  .catch(err => console.log(err));

// cb
pool.query('SELECT CURRENT_DATE', (err, result) => {
  if (err) {
    return console.log(err);
  }
  console.log('cb:', result.rows[0]);
});

// promises async/await
(async function () {
  try {
    const result = await pool.query('SELECT CURRENT_DATE');
    console.log('await:', result.rows[0]);
  } catch (err) {
    console.log(err);
  }
})();
