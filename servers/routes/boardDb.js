const express = require('express');
const mysql = require('mysql2');
const dbConfig = require('../config/dbConfig');
const connection = mysql.createConnection(dbConfig);
const router = express.Router();
const multer = require('multer');
const path = require('path');
connection.connect();

const storage = multer.diskStorage({
  destination: function (request, file, callback) {
    callback(null, 'uploads/');
  },
  filename: function (request, file, callback) {
    var now = new Date();
    var year = now.getFullYear();
    var month =
      now.getMonth() + 1 < 10 ? '0' + (now.getMonth() + 1) : now.getMonth() + 1;
    var date = now.getDate() < 10 ? '0' + now.getDate() : now.getDate();
    var hour = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
    var minute =
      now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
    var second =
      now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds();
    var millisecond = now.getMilliseconds();
    callback(
      null,
      file.fieldname +
        '_' +
        year +
        month +
        date +
        '_' +
        hour +
        minute +
        second +
        millisecond +
        path.extname(file.originalname),
    );
  },
});

const upload = multer({ storage: storage });

router.post('/board/write', upload.single('imgFile'), function (req, res) {
  // + file 정보 출력
  console.log(req.file);

  console.log(req.body);
  console.log('Hit');
  console.log(
    `${req.ip} | [${new Date().toISOString()}] | "${req.method} ${
      res.statusCode
    } ${req.path}" ${JSON.stringify({ ...(req.query || req.body) })} | ${
      req.headers['user-agent']
    }`,
  );

  var title = req.body.title;
  var user_id = req.body.userID;
  var visit_center = req.body.visit_center;
  var contents = req.body.contents;
  var date = '2020-08-27';

  if (title && user_id && visit_center && contents) {
    connection.query(
      "INSERT INTO board (title, user_id, visit_center, contents, date) VALUES ('" +
        title +
        "', '" +
        user_id +
        "', '" +
        visit_center +
        "', '" +
        contents +
        "', '" +
        date +
        "' )",
      function (err, result, fields) {
        if (err) {
          res.send('err : ' + err);
        } else {
          console.log(title + ',' + visit_center);
          console.log('Result : ' + result);
          console.log('Fiedls : ' + fields);
          res.send('sucess create');
        }
      },
    );
  }
});

module.exports = router;
