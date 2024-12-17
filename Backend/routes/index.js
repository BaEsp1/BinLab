const express = require('express');
const user = require('./userRoutes');
const login = require('./loginRoutes')
const stats = require('./userStatsRoutes')
const dao = require('./daoRoutes')
const orders = require('./orderRoutes')

const router = express.Router();

router.use('/login', login)
router.use('/user', user)
router.use('/stats', stats)
router.use('/dao', dao)
router.use('/order',orders)

module.exports = router;
