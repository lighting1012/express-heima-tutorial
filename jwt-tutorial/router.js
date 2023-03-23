const express = require('express')
const { generateJWT } = require('./generateJWT')
const router = express.Router()

router.post('/login', (req, res) => {
  const userInput = req.body
  console.log(req.body)
  if (userInput.username !== 'admin' || userInput.password !== '123456') {
    return res.send({
      stauts: 400,
      message: '用户名密码错误'
    })
  }
  
  // 生成jwt串
  const token = generateJWT({username: userInput.username})
  return res.send({
    status: 200,
    messaeg: '登录成功！',
    token
  })
})

module.exports = router