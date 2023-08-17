const postgresql = require('pg');
import { Pool } from 'pg';

const config = {
  user: process.env.DB_USER, // name of the user account
  database: process.env.DB, // name of the database
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000,
};

const pool: Pool = new postgresql.Pool(config);

export default pool;
