const express = require('express');
const mysql = require('mysql2');
const dbConfig = require('../config/dbConfig');
const { off } = require('process');
const connection = mysql.createConnection(dbConfig);
const router = express.Router();

connection.connect();

router.get('/posts', function (req, res) {
  const limit = parseInt(req.query.limit);
  const page = parseInt(req.query.pageNumber);

  const offset = (page - 1) * limit;

  //let date_format = date_format(date, '%Y-%m-%d');

  var sql =
    'SELECT pid, title, date, visit_number FROM board ORDER BY pid DESC LIMIT ' +
    limit +
    ' OFFSET ' +
    offset;

  connection.query(sql, (err, results, field) => {
    console.log(results);
    res.json(results);
  });
});

// router.get('/totalPosts', function (req, res) {
//   const pageNum = [];
//   const limit = 5;
//   var sql = 'SELECT pid FROM board ORDER BY pid DESC LIMIT 1';

//   connection.query(sql, (err, result, field) => {
//     for (let i = 1; i <= Math.ceil(result[0].pid / limit); i++) {
//       pageNum.push(i);
//     }

//     res.send(pageNum);
//   });
// });

module.exports = router;
