const express = require('express');
const path = require('path');
const mysql = require('mysql');
const dbConfig = require('../config/dbConfig');
const connection = mysql.createConnection(dbConfig);
const router = express.Router();

connection.connect();
router.get('/', (req, res) => {
  res.send(`<h1>DB testing Page</h1>`);
});
router.get('/userInfo/:name', (req, res) => {
  const name = req.params.name;
  const responseData = {};

  const query = connection.query(
    `SELECT * FROM users WHERE user_name = ?`,
    [name],
    (err, rows) => {
      if (err) throw err;
      if (rows[0]) {
        responseData.name = rows[0].user_name;
        responseData.phone = rows[0].user_phone;
      } else {
        responseData.name = 'none';
        responseData.phone = 'none';
      }
      res.json(responseData);
    },
  );
});

module.exports = router;
