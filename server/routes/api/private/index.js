const router = require('express').Router()


//******Diet Selection and Filtering*******//

// router.get('/menu-items', (req, res, next) => {
//     const diet = req.body.diet
//     const sql = `
//     SELECT m.id, m.name, m.meal_type, m.description, m.diet, m.price, r.name, r.address, r.zipcode, r.city, r.state, r.opening_time, r.closing_time, r.day_opened, r.ratings, p.url
//     FROM menu_items m
//     LEFT JOIN Restaurants r
//     ON m.restaurant_id = r.id
//     LEFT JOIN pictures p
//     ON p.menu_items_id = m.id
//   `
//     conn.query(sql, (err, results,fields) => {
//       res.json(results)
//     })
//   })

module.exports = router