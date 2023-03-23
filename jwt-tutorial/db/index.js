const mysql = require('mysql')

// 创建mysql连接对象
const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '123456',
  database: 'itheima-01'
})

module.exports = db