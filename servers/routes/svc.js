const express = require('express');
const path = require('path');
const mysql = require('mysql');
const request = require('request');
const dbConfig = require('../config/dbConfig');
const connection = mysql.createConnection(dbConfig);
const router = express.Router();

connection.connect();

const API_KEY = process.env.KAKAO_LOCAL_API_KEY;
request.get(
  {
    url: 'https://dapi.kakao.com/v2/local/search/keyword.json',
    qs: {
      page: 5,
      query: '삼성전자 서비스센터',
    },
    headers: {
      Content_Type: 'application/x-www-form-urlencoded',
      Authorization: `KakaoAK ${API_KEY}`,
    },
  },
  (err, res, body) => {
    let json = JSON.parse(body);
    console.log(json);
  },
);
