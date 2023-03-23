const express = require('express')
const app = express()
const router = require('./router')


const { expressjwt } = require('express-jwt')
const cors = require('cors')
const bodyParser = require('body-parser')
const { secret } = require('./generateJWT')

// 跨域
app.use(cors())
// 解析body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// 解析jwt
app.use(
  expressjwt({ secret, algorithms: ["HS256"] })
  // unless 指定不需要访问权限的路径
  .unless({ path: ['/api/login']})
)


app.use('/api', router)

app.listen(8888, () => {
  console.log('Server running at http://127.0.0.1:8888');
})