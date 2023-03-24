const express = require('express')
const app = express()
const userRouter = require('./router/user')


const { expressjwt } = require('express-jwt')
const cors = require('cors')
const bodyParser = require('body-parser')
const { secret } = require('./generateJWT')

// 跨域中间件
app.use(cors())
// 解析body中间件
app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))
// 解析jwt中间件，配置成功后会把解析后的用户信息挂载在req.auth上
app.use(
  expressjwt({ secret, algorithms: ["HS256"] })
  // unless 指定不需要访问权限的路径
  .unless({ path: ['/api/login', '/api/register']})
)

// 挂载路由
app.use('/api', userRouter)

// 全局错误中间件
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    return res.status(401).send({
      message: '无效的token'
    })
  }
  console.error(err.message);
  res.status(500).send({
    message: '未知错误'
  })
})

app.listen(8888, () => {
  console.log('Server running at http://127.0.0.1:8888');
})