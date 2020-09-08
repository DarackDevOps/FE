const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const dbConfig = require('../config/dbConfig');
const connection = mysql.createConnection(dbConfig);
const router = express.Router();

connection.connect();
router.get('/', (req, res) => {
  res.send(`<h1>DB testing Page</h1>`);
});
router.get('/userInfo/:ID', (req, res) => {
  const ID = req.params.ID;
  const responseData = {};

  const query = connection.query(
    `SELECT * FROM table_test WHERE ID = ?`,
    [ID],
    (err, rows) => {
      if (err) throw err;
      if (rows[0]) {
        responseData.ID = rows[0].ID;
        responseData.Name = rows[0].Name;
      } else {
        responseData.ID = 'none';
        responseData.Name = 'none';
      }
      res.json(responseData);
    },
  );
});

module.exports = router;
