const express = require('express');
const mysql = require('mysql2');
const dbConfig = require('../config/dbConfig');
const connection = mysql.createConnection(dbConfig);
const router = express.Router();

connection.connect();

router.get('/posts', function (req, res) {
  var sql = 'SELECT pid, title, date, views FROM board ORDER BY 1 DESC, 2;';

  connection.query(sql, (err, results, field) => {
    res.json(results);
  });
});

module.exports = router;
