const router = require('express').Router()
const sha512 = require('js-sha512')
const conn = require('../../db')
const jwt = require('jsonwebtoken')
const config = require('config')


//****** user login and register *********//

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
router.get('/menu-items/:selectedDiets', (req,res,next) => {
  const diet = req.params.selectedDiets.split(',')
  const sql = `
  SELECT m.id, m.name as item_name, m.description, m.price, dr.name as diet_name, p.id as pic_id, r.name as res_name, r.address, r.zipcode, r.city, r.state, r.opening_time, r.closing_time, r.ratings
  FROM menu_items m
  LEFT JOIN diet_links dl
  ON m.id = dl.menu_item_id
  LEFT JOIN dietary_rest dr
  ON dl.dietary_rest_id = dr.id
  LEFT JOIN pictures p
  ON p.menu_items_id = m.id
  LEFT JOIN restaurants r
  ON m.restaurant_id = r.id
  `

  conn.query(sql, ( err, results, fields ) => {

    if(diet == 'none'){
      var map = new Map(results.map(o => [o.id,o]))
      var newResults = [...map.values()]
      res.json(newResults)
    } else {
     const filteredResults = results.filter(item => {
      if(diet.includes(item.diet_name)){
        return true
      } else {
        return false
      }
    })
    var map = new Map(filteredResults.map(o => [o.id,o]))
    var unique = [...map.values()]
    res.json(unique)
    }
  })
})


/*******Google map api ************/
 router.get('/locations', (req,res,next) => {
   const sql = `
   SELECT *
   FROM restaurants
   `
 
   conn.query(sql, (err, results, fields) => {
     res.json(results)
   })
 })

/********Restaurant Registration *********/
router.post('/rest-register', (req,res,next) => {
  const name = req.body.name
  const address = req.body.address
  const city = req.body.city
  const state = req.body.state
  const zipcode = req.body.zipcode
  const sql = `
  INSERT INTO Restaurants (name, address, city, state, zipcode)
  VALUES(?,?,?,?,?)
  `
  conn.query(sql, [name, address, city, state, zipcode],(err,results,fields) => {
    console.log(err)
    if (err) {
      res.json({
        message: "Restaurant already exists"
      })
    } else {
      res.json({
        message: "Restaurant added"
      })
    }
  })
})


//   router.post('/order', (req,res,next) => {
//     const order = req.body.item
//     const sql = `
//     INSERT INTO past_Orders (name, quantity, notes, size, price, time_placed) VALUES ? ? ? ? ? ? ?
//     `
//     // join by user id/token/name/email?
//     conn.query(sql, order, order, order, order, order, order, order, (err, results, fields) => {
//       res.json({
//         message: 'Order added'
//       })
//     })
//  })


module.exports = router