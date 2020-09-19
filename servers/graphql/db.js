const mysql = require('mysql2/promise');
const dbConfig = require('../config/dbConfig');
const { createPool } = require('mysql2');

//const connection = mysql.createConnection(dbConfig);

// connection.connect();

const pool = mysql.createPool({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const getPostsNumber = async () => {
  const connection = await pool.getConnection(async (conn) => conn);
  const pageNum = [];

  const latest_pid = await connection.query(
    'SELECT pid FROM board ORDER BY pid DESC LIMIT 1',
  );

  for (let i = 1; i < Math.ceil(latest_pid[0][0].pid / 5); i++) {
    pageNum.push(i);
  }

  connection.release();
  return pageNum;
};

module.exports = getPostsNumber;
