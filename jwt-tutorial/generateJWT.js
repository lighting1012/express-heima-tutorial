const jwt = require('jsonwebtoken')
const secret = 'itheima N01 ^_^'

// 生成jwt串
const generateJWT = (data) => {
  // 使用jwt.sign方法
  // params1: 加密的数据
  // params2: 密钥
  // params1: options 过期时间等
  return jwt.sign(data, secret, { expiresIn: '30s', algorithm: "HS256" })
}

module.exports = {
  generateJWT,
  secret
}