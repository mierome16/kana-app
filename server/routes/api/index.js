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

//******Diet Selection and Filtering*******//
router.get('/menu-items', (req, res, next) => {
  const diet = req.body.diet
  const sql = `
  SELECT m.id, m.name as meal_name, m.meal_type, m.description, m.diet, m.price, r.name as res_name, r.address, r.zipcode, r.city, r.state, r.opening_time, r.closing_time, r.day_opened, r.ratings, p.url
  FROM menu_items m
  LEFT JOIN Restaurants r
  ON m.restaurant_id = r.id
  LEFT JOIN pictures p
  ON p.menu_items_id = m.id
`
  conn.query(sql, (err, results,fields) => {
    console.log(results)
    res.json(results)
  })
 })

 router.get('/filtered-items/:diet', (req,res,next) => {
    const diet = req.body.diet
    const sql = `SELECT m.id, m.name as meal_name, m.meal_type, m.description, m.diet, m.price, r.name as res_name, r.address, r.zipcode, r.city, r.state, r.opening_time, r.closing_time, r.day_opened, r.ratings, p.url
    FROM menu_items m
    LEFT JOIN Restaurants r
    ON m.restaurant_id = r.id
    LEFT JOIN pictures p
    ON p.menu_items_id = m.id
    HAVING m.diet LIKE '%?%'
    `
    conn.query(sql, [diet], (err,results,fields) => {
      res.json(results)
    })
 })

 router.get('/locations', (req,res,next) => {
   const sql = `
   SELECT *
   FROM restaurants
   `
 
   conn.query(sql, (err, results, fields) => {
     res.json(results)
   })
 })
module.exports = router