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
// router.get('/menu-items/:selectedDiets', (req,res,next) => {
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
    // var filteredResults
    // var filteredResults2
    // if (diets == 'none') {
    //   var map = new Map(results.map(o => [o.id,o]))
    //   var newResults = [...map.values()]
    //   res.json(newResults)
    // } else {
    // if (diets !== 'none'){
      // const filteredResults = results.filter(item => {
      //   if(diets.includes(item.diet_name)){
      //     return true
      //   } else {
      //     return false
      //   }
      // })
      // if (meals !== 'none') {
        // const filteredResults2 = filteredResults.filter(item => {
        //   if(meals.includes(item.meal_name)){
        //     return true
        //   } else {
        //     return false
        //   }
        // }) 
    //   }
    // }
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


//****Type of Meal Selection & Filtering*****//
// router.get('/menu-items/:selectedMeals', (req,res,next) => {
//   const meal = req.params.selectedMeals.split(',')
//   const sql = `
//  SELECT m.id, m.name as item_name, m.description, m.price, dr.name as diet_name, mt.meal_name, mt.id, p.id as pic_id, r.name as res_name, r.address, r.zipcode, r.city, r.state, r.opening_time, r.closing_time, r.ratings
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
//   console.log(selectedMeals)
//   conn.query(sql, ( err, results, fields ) => {

//     if(meal == 'none'){
//       var map = new Map(results.map(o => [o.id,o]))
//       var newMealResults = [...map.values()]
//       res.json(newMealResults)
//     } else {
//      const filteredMeals = results.filter(item => {
//       if(diet.includes(item.meal_name)){
//         return true
//       } else {
//         return false
//       }
//     })
//     var map = new Map(filteredMeals.map(o => [o.id,o]))
//     var unique = [...map.values()]
//     res.json(unique)
//     }
//   })
// })




// router.get('/menu-items/:selectedDiets', (req, res, next) => {
//   const diet = req.params.selectedDiets
//   const newDiet = diet.split(',')
//   if(diet === 'none'){
//   const sql = `
//   SELECT m.id, m.name as meal_name, m.meal_type, m.description, m.diet, m.price, r.name as res_name, r.address, r.zipcode, r.city, r.state, r.opening_time, r.closing_time, r.day_opened, r.ratings, p.url
//   FROM menu_items m
//   LEFT JOIN Restaurants r
//   ON m.restaurant_id = r.id
//   LEFT JOIN pictures p
//   ON p.menu_items_id = m.id
// `
//   conn.query(sql, (err, results,fields) => {
//     res.json(results)
//   })
// }else{
//   const sql = `
//   SELECT m.id, m.name as meal_name, m.meal_type, m.description, m.diet, m.price, r.name as res_name, r.address, r.zipcode, r.city, r.state, r.opening_time, r.closing_time, r.day_opened, r.ratings, p.url
//   FROM menu_items m
//   LEFT JOIN Restaurants r
//   ON m.restaurant_id = r.id
//   LEFT JOIN pictures p
//   ON p.menu_items_id = m.id
// `
//   conn.query(sql, (err, results,fields) => {
//     const newResults = []
//       newDiet.forEach(diet => {
//          results.filter(item => {
//             // if(item.diet !== null){
//             // const dietArr = item.diet.split(' ')
//             // if(dietArr.includes(diet)){
//               if(item.diet === diet){
//                 newResults.push(item)
//             }
//           // }
//       })
      
//           })
//           console.log(newResults)
//       res.json(newResults)
//       })
//     }
//   })
    


//  router.post('/filtered-items', (req,res,next) => {
//     const diet = req.params.diet
//     console.log(diet)
//     let all = []
//     if (diet.length === 0) {
//       const sql = `SELECT m.id, m.name as meal_name, m.meal_type, m.description, m.diet, m.price, r.name as res_name, r.address, r.zipcode, r.city, r.state, r.opening_time, r.closing_time, r.day_opened, r.ratings, p.url
//       FROM menu_items m
//       LEFT JOIN Restaurants r
//       ON m.restaurant_id = r.id
//       LEFT JOIN pictures p
//       ON p.menu_items_id = m.id
//       `
//       conn.query(sql, [item], (err,results,fields) => {
//         console.log(results)
//         res.json(results)
//       })

//     } else {
//     diet.forEach(item => {
//       let diet = '%' + item + '%'
//       const sql = `SELECT m.id, m.name as meal_name, m.meal_type, m.description, m.diet, m.price, r.name as res_name, r.address, r.zipcode, r.city, r.state, r.opening_time, r.closing_time, r.day_opened, r.ratings, p.url
//       FROM menu_items m
//       LEFT JOIN Restaurants r
//       ON m.restaurant_id = r.id
//       LEFT JOIN pictures p
//       ON p.menu_items_id = m.id
//       HAVING m.diet LIKE ?
//       `
//       conn.query(sql, [diet], (err,results,fields) => {
//         all.push(results)
//         console.log(results)
//       })
//       res.json(all)
//     })
//  }
// })

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