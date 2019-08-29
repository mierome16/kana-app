const router = require('express').Router()


//******Diet Selection and Filtering*******//
// router.get('/menu-items/:selectedDiets', (req,res,next) => {
//     const diet = req.params.selectedDiets.split(',')
//     console.log(diet)
//     const sql = `
//     SELECT m.id, m.name as item_name, m.description, m.price, dr.name as diet_name, p.id as pic_id, r.name as res_name, r.address, r.zipcode, r.city, r.state, r.opening_time, r.closing_time, r.ratings
//     FROM menu_items m
//     LEFT JOIN diet_links dl
//     ON m.id = dl.menu_item_id
//     LEFT JOIN dietary_rest dr
//     ON dl.dietary_rest_id = dr.id
//     LEFT JOIN pictures p
//     ON p.menu_items_id = m.id
//     LEFT JOIN restaurants r
//     ON m.restaurant_id = r.id
//     `
  
//     conn.query(sql, ( err, results, fields ) => {
  
//       if(diet == 'none'){
//         var map = new Map(results.map(o => [o.id,o]))
//         var newResults = [...map.values()]
//         res.json(newResults)
//       } else {
//        const filteredResults = results.filter(item => {
//         if(diet.includes(item.diet_name)){
//           return true
//         } else {
//           return false
//         }
//       })
//       var map = new Map(filteredResults.map(o => [o.id,o]))
//       var unique = [...map.values()]
//       res.json(unique)
//       }
//     })
//   })

// router.get('/')

module.exports = router