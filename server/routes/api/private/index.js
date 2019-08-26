const router = require('express').Router()

router.get("/foo", (req, res, next) => {
  res.json({
      'foo': 'bar'
  })
})

module.exports = router