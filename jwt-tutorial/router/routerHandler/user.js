const { generateJWT } = require('../../generateJWT')
// 数据库
const db = require('../../db')
// 密码加密
const bcrypt = require('bcryptjs')

// 注册
exports.register = (req, res) => {
  const userInput = req.body
  if (!userInput.username || !userInput.password) {
    return res.status(400).send({
      message: '用户名或密码不合法'
    })
  }
  // 查询用户名是否被占用
  const sqlStr = 'select * from ev_users where username=?'
  db.query(sqlStr, userInput.username, (err, results) => {
    if (err) {
      // 执行sql语句失败
      return res.status(500).send({ message: err.message })
    }
    if (results.length > 0) {
      // 用户名被占用
      return res.status(400).send({ message: '用户名已被占用' })
    }
    // 加密用户的密码
    userInput.password = bcrypt.hashSync(userInput.password, 10)
    // 定义sql插入语句
    const sql = 'insert into ev_users set ?'
    db.query(
      sql, 
      { username: userInput.username, password: userInput.password },
      (err, results) => {
        if (err) return res.status(500).send({ message: err.message })
        if (results.affectedRows !== 1) {
          return res.status(500).send({ message: '注册失败，请稍后再试' })
        }
        res.status(200).send({ message: '注册成功' })
      })
  })
  // res.send('注册成功')
}

// 登录
exports.login = (req, res) => {
  const userInput = req.body
  console.log(req.body)
  if (userInput.username !== 'admin' || userInput.password !== '123456') {
    return res.status(400).send({
      message: '用户名密码错误'
    })
  }
  // 生成jwt串
  const token = generateJWT({username: userInput.username})
  console.log('token:::', token);
  return res.status(200).send({
    message: '登录成功！',
    data: { token }
  })
}

// 获取用户信息
exports.getInfo = (req, res) => {
  res.status(200).send({
    message: '获取用户信息成功',
    data: req.auth
  })
}