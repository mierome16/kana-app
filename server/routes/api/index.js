const router = require('express').Router()
const sha512 = require('js-sha512')
const conn = require('../../db')
const jwt = require('jsonwebtoken')
const config = require('config')

router.post('/login', (req, res, next) => {
  const username = req.body.username
  const password = sha512(req.body.password + config.get('salt'))

  const sql =  `SELECT * FROM users WHERE username = ? AND password = ? `

  conn.query(sql, [username, password], (err, results, fields) => {
    if (results.length > 0){
      const token = jwt.sign({username}, config.get('secret'))
 
      res.json({
        message: "User signed in",
        token: token 
      })
    } else {
      res.status(401).json({
        message: "username or password is incorrect"
      })
    }
  })
})

router.post('/register', (req, res, next) => {
  const first_name = req.body.first_name
  const last_name = req.body.last_name
  const username = req.body.username
  const password = sha512(req.body.password + config.get('salt'))
  console.log(username)
 const sql = `INSERT into users (username, password, first_name, last_name) VALUES (?, ?, ?, ?)`
 
 conn.query(sql, [username, password, first_name, last_name], (err, results, fields) => {
   if (err) {
     console.log(err)
     res.json({
       message: "User already exists"
     })
   } else {
     res.json({
       message: "User created"
     })
   }
 })
})

module.exports = router