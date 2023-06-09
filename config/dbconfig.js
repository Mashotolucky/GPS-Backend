require("dotenv").config();
const { Pool } = require("pg");


const isProduction = process.env.NODE_ENV === "production";
const database = process.env.NODE_ENV === "dev" ? process.env.PGDATABASE_TEST : process.env.PGDATABASE;

const connectionString = `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`;
//const connectionString = `postgresql://root:12345@localhost:5432/esign`;

const pool = new Pool({
  connectionString: isProduction? process.env.DATABASE_URL : connectionString,
  ssl: { rejectUnauthorized: ('DATABASE_SSL_SELF', false), },
  secure: true,
  secureOptions: {rejectUnauthorized: false}
});

module.exports = {
  pool
};
