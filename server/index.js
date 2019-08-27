const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const ejwt  = require('express-jwt')
const config = require('config')
const protected = require('./routes/api/private')

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static('public'))

app.use('/api', require('./routes/api'))
app.use('/api', ejwt({ secret: config.get('secret')}), protected)
app.use('/', require('./routes'))

app.use(function(err, req, res, next){
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.json({
    err: err 
  })
})

server.listen(8000, () => {
  console.log("Server listening on port 8000")
})