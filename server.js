const express = require('express')
const app = express()

app.use(express.static('docs'))
app.use(express.static('css'))

app.listen(3000, function () {
  console.log('Server address: http://127.0.0.1:3000/')
})
