const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const init = require('./chat').default

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static('public'))

app.use('/api', require('./routes/api'))
app.use('/', require('./routes'))

init(io)

server.listen(8000, () => {
  console.log("Server listening on port 8000")
})