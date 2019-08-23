const router = require('express').Router()

router.get('/greeting', (req, res, next) => {
  res.json({
    "greeting": "Hello World!"
  })
})

module.exports = router