const express = require('express');
const path = require('path');
const fs = require('fs');
const mysql = require('mysql2');
const dbConfig = require('../config/dbConfig');
const { runInNewContext } = require('vm');
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
        responseData.date = rows[0].date;

        fs.readdir(path.join('../FE/uploads'), 'utf8', function (err, files) {
          if (err) {
            res.status(500);
            throw err;
          } else console.log(files);

          if (rows[0].image_file === null || rows[0].image_file === 'null') {
            console.log('값없음');
          } else {
            fs.readFile(
              path.join('../FE/uploads/', rows[0].image_file),
              function (err, data) {
                console.log('a');
                if (err) {
                  res.status(500);
                  throw err;
                } else {
                  //res.writeHead(200, { 'Content-type': 'image/jpeg' });
                  res.end(data);
                }
              },
            );
          }
        });
      } else {
        responseData.name = 'none';
        responseData.phone = 'none';
        responseData.title = 'none';
        responseData.user_id = 'none';
        responseData.visit_center = 'none';
        responseData.contents = 'none';
        responseData.date = 'none';
      }
      res.send(responseData);
    },
  );
});

module.exports = router;
