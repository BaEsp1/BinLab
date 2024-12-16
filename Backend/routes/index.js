const express = require('express');
const user = require('./userRoutes');
const login = require('./loginRoutes')
const stats = require('./userStatsRoutes')
const dao = require('./daoRoutes')

const router = express.Router();

router.use('/user', user)
router.use('/login', login)
router.use('/stats', stats)
router.use('/dao', dao)

module.exports = router;
