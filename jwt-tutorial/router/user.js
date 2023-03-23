const express = require('express')
const router = express.Router()

// 把处理函数放在handler中
const userHandler = require('./routerHandler/user.js')

// 登录
router.post('/login', userHandler.login)
// 获取用户信息
router.get('/getInfo', userHandler.getInfo)

module.exports = router