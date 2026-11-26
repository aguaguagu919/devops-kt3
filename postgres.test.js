const { Client } = require('pg');
const checkDatabase = process.env.PGHOST ? test : test.skip;
checkDatabase('PostgreSQL accepts queries from the test job', async () => {
  const db = new Client({ connectionTimeoutMillis: 5000 });
  await db.connect();
  try {
    const result = await db.query('SELECT 1 AS value');
    expect(result.rows[0].value).toBe(1);
  } finally {
    await db.end();
  }
});
