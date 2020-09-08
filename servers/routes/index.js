const express = require('express');
const router = express.Router();

const boardDB = require('./boardDb');
const posts = require('./posts');
const post = require('./post');
const dbTest = require('./dbTest');

router.use('/board', boardDB, posts, post);
router.use('/dbTest', dbTest);

router.get('/', (req, res) => res.json({ username: 'hong-gil-dong' }));
router.get('/group', (req, res) => res.json({ username: 'Darack' }));

module.exports = router;
