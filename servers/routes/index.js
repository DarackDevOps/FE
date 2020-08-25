const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.json({ username: 'hong-gil-dong' }));
router.get('/group', (req, res) => res.json({ username: 'Darack' }));

module.exports = router;
