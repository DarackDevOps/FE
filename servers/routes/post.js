const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const dbConfig = require('../config/dbConfig');
const connection = mysql.createConnection(dbConfig);
const router = express.Router();

connection.connect();

router.get('/post', (req, res) => {
  const pid = req.query.pid;
  const responseData = {};

  const query = connection.query(
    `SELECT * FROM board WHERE pid = ?`,
    [pid],
    (err, rows) => {
      if (err) throw err;
      if (rows[0]) {
        console.log(rows[0]);
        responseData.title = rows[0].title;
        responseData.user_id = rows[0].user_id;
        responseData.visit_center = rows[0].visit_center;
        responseData.contents = rows[0].contents;
        responseData.image_file = rows[0].image_file;
        responseData.date = rows[0].date;
      } else {
        responseData.name = 'none';
        responseData.phone = 'none';
        responseData.title = 'none';
        responseData.user_id = 'none';
        responseData.visit_center = 'none';
        responseData.contents = 'none';
        responseData.image_file = 'none';
        responseData.date = 'none';
      }
      res.json(responseData);
    },
  );
});

module.exports = router;
