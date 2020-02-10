const router = require('express').Router();

const { index } = require('../controllers/index.controller');

router.get('/', index);

module.exports = router;