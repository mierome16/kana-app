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
        token: token,
        user: {
          username: results[0].username,
          id: results[0].id
        }
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
 const sql = `INSERT into users (username, password, first_name, last_name) VALUES (?, ?, ?, ?)`
 
 conn.query(sql, [username, password, first_name, last_name], (err, results, fields) => {
  if (err) {
     res.json({
       message: "User already exists"
     })
   } else {
     res.json({
       message: "User created",
       user: results
     })
   }
 })
})


router.post('/rest-register', (req,res,next) => {
  const name = res_name
  const address= res_address
  const city= res_city
  const state= res_state
  const zipcode= res_zip
  const email= res_email
  const phone= res_phone

  conn.query( (err,results,fields) => {
    
  })
})

//******Diet Selection and Filtering*******//
// router.get('/menu-items/:selectedDiets' ,(req,res,next) => {
//   const diet = req.params.selectedDiets.split(',')
//   const sql = `
//   SELECT m.id, m.name as item_name, m.description, m.price, dr.name as diet_name, dr.disabled, mt.meal_name, mt.id AS meal_id, p.id as pic_id, r.name as res_name, r.address, r.zipcode, r.city, r.state, r.opening_time, r.closing_time, r.ratings
//   FROM menu_items m
//   LEFT JOIN diet_links dl
//   ON m.id = dl.menu_item_id
//   LEFT JOIN dietary_rest dr
//   ON dl.dietary_rest_id = dr.id
//   LEFT JOIN meal_Links ml
//   on m.id = ml.menu_item_id
//   LEFT JOIN meal_types mt
//   ON ml.mealtype_id = mt.id
//   LEFT JOIN pictures p
//   ON p.menu_items_id = m.id
//   LEFT JOIN restaurants r
//   ON m.restaurant_id = r.id
//   `

//   conn.query(sql, ( err, results, fields ) => {

//     if(diet == 'none'){
//       var map = new Map(results.map(o => [o.id,o]))
//       var newResults = [...map.values()]
//       res.json(newResults)
//     } else {
//      const filteredResults = results.filter(item => {
//       if(diet.includes(item.diet_name)){
//         return true
//       } else {
//         return false
//       }
//     })
//     var map = new Map(filteredResults.map(o => [o.id,o]))
//     var unique = [...map.values()]
//     res.json(unique)
//     }
//   })
// })

router.get('/menu-items/:selectedDiets/:selectedMeals', (req,res,next) => {
  const diets = req.params.selectedDiets.split(',')
  const meals = req.params.selectedMeals.split(',')
  const sql = `
  SELECT m.id, m.name as item_name, m.description, m.price, dr.name as diet_name, dr.disabled, mt.meal_name, mt.id AS meal_id, p.id as pic_id, r.name as res_name, r.address, r.zipcode, r.city, r.state, r.opening_time, r.closing_time, r.ratings
  FROM menu_items m
  LEFT JOIN diet_links dl
  ON m.id = dl.menu_item_id
  LEFT JOIN dietary_rest dr
  ON dl.dietary_rest_id = dr.id
  LEFT JOIN meal_Links ml
  on m.id = ml.menu_item_id
  LEFT JOIN meal_types mt
  ON ml.mealtype_id = mt.id
  LEFT JOIN pictures p
  ON p.menu_items_id = m.id
  LEFT JOIN restaurants r
  ON m.restaurant_id = r.id
  `

  conn.query(sql, ( err, results, fields ) => {
  const filteredResults = results.filter(item => diets.includes(item.diet_name) || diets == 'none').filter(item => meals.includes(item.meal_name) || meals == 'none'); 

    var map = new Map(filteredResults.map(o => [o.id,o]))
    var unique = [...map.values()]
    res.json(unique)
  })
})



//**** GET LIST OF DIETS FROM SQL *****//
router.get('/dietary-rest', (req,res,next) => {
  const sql = `
  SELECT * 
  FROM dietary_rest
  `

  conn.query(sql, (err, results, fields) => {
    res.json(results)
  })
})

//**** GET LIST OF MEAL TYPES FROM SQL *****//
router.get('/mealtypes', (req,res,next) => {
  const sql = `
  SELECT * 
  FROM meal_types
  `

  conn.query(sql, (err, results, fields) => {
    res.json(results)
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

  
        //results.insertId
 router.post('/add-order', (req, res, next) => {
  const user_id = req.body.user_id
  const item_id = req.body.item_id
  const confirm = req.body.confirm
  const notes = req.body.notes
  const quantity = req.body.quantity
  const size = req.body.size
  const timePlaced = req.body.timePlaced
  const type = req.body.type
  const reservation_date = req.body.reservation_date
  //const reserve_date = req.body.reserve_date
 const sql = `INSERT into orders (user_id, item_id, confirm, notes, quantity, size, time_placed, type, reserve_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
 
 conn.query(sql, [user_id, item_id, confirm, notes, quantity, size, timePlaced, type, reservation_date], (err, results, fields) => {
    results.insertId
    if (err) {
     res.json({
       message: err
     })
   } else {
     res.json(results)
   }
 })
})

router.get('/get-orders/:user', (req, res, next) => {
  const user_id = req.params.user

  const sql = `
  SELECT o.confirm, o.quantity, o.notes, o.time_placed, o.reserve_date, o.item_id, o.type, o.size, m.id, m.name as meal_name, m.meal_type, m.description, m.diet, m.price, m.popular, r.name as restaurant, r.address, r.zipcode, r.city, r.state, r.opening_time as open, r.closing_time as close, r.day_opened, p.id as img
  FROM orders o, users, menu_items m, restaurants r, pictures p 
  WHERE o.user_id = ? AND users.id = ? AND o.item_id = m.id AND m.id = p.menu_items_id AND m.restaurant_id = r.id 
  ORDER BY o.date_added DESC
  `
 conn.query(sql, [user_id, user_id], (err, results, fields) => {
    if (err) {
     res.json({
       message: err
     })
   } else {
     res.json(results)
   }
 })
})


router.post('/add-to-favorites', (req, res, next) => {
  const user_id = req.body.user_id
  const item_id = req.body.item_id.id
  const sql = `
  INSERT INTO user_favorites (user_id, item_id) VALUES (?, ?)
  `
 conn.query(sql, [user_id, item_id], (err, results, fields) => {
    if (err) {
     res.json({
       message: err
     })
   } else {
     res.json(results)
   }
 })
})


router.get('/getFav/:id', (req, res, next) => {
  const user_id = req.params.id
  const sql = `
  SELECT m.name as meal_name, m.id, m.meal_type, m.description, m.diet, m.price, m.popular, r.ratings as rating, r.closing_time as close, r.name as restaurant, r.address, r.zipcode, r.city, r.state, r.opening_time as open, r.day_opened, p.id as img
  FROM  users, menu_items m, restaurants r, pictures p, user_favorites f
  WHERE users.id = ? AND f.user_id = ? AND f.item_id = m.id AND m.id = p.menu_items_id AND m.restaurant_id = r.id 
  `
 conn.query(sql, [user_id, user_id], (err, results, fields) => {
   const favs = results.reduce((acc, current) => {
    const x = acc.find(item => item.meal_name === current.meal_name);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, [])

    if (err) {
     res.json({
       message: err
     })
   } else {
     res.json(favs)
   }
 })
})




module.exports = router