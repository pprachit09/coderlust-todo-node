const router = require('express').Router();

const { postmessage } = require('../controllers/slack');

router.post('/postmessage', postmessage);

module.exports = router
