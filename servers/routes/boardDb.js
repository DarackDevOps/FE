const express = require('express');
const mysql = require('mysql2');
const dbConfig = require('../config/dbConfig');
const connection = mysql.createConnection(dbConfig);
const router = express.Router();

connection.connect();

router.post('/board/write', function (req, res) {
    console.log(req.body)
    console.log('Hit')
    console.log(
        `${req.ip} | [${new Date().toISOString()}] | "${req.method} ${res.statusCode} ${req.path}" ${JSON.stringify({ ...(req.query || req.body) })} | ${req.headers["user-agent"]}`
    )

    var title = req.body.title;
    var user_id = req.body.userID;
    var visit_center = req.body.visit_center;
    var contents = req.body.contents;
    var date = "2020-08-27";

    if (title && user_id && visit_center && contents) {
        connection.query("INSERT INTO board (title, user_id, visit_center, contents, date) VALUES ('" + title + "', '" + user_id + "', '" + visit_center + "', '" + contents + "', '" + date + "' )",
            function (err, result, fields) {
                if (err) {
                    res.send('err : ' + err)
                }
                else {
                    console.log(title + ',' + visit_center)
                    console.log("Result : " + result)
                    console.log("Fiedls : " + fields)
                    res.send("sucess create");
                }
            })
    }

})

module.exports = router;
