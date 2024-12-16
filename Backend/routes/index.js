const express = require('express');
const user = require('./userRoutes');
const login = require('./loginRoutes')

const router = express.Router();

router.use('/user', user)
router.use('/login', login)

module.exports = router;
