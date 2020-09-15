const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const dbConfig = require('../config/dbConfig');
const connection = mysql.createConnection(dbConfig);
const router = express.Router();

connection.connect();

router.get('/list');
module.exports = router;
