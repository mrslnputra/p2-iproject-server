const user = require('./user')
const router = require('express').Router()

router.use('/user', user)

module.exports = router
