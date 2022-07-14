const express = require('express')
const app = express()
const PORT = 5000

const mongoose = require('mongoose') // 몽고DB connet
mongoose
  .connect(
    'mongodb+srv://wonjun:uzus@cluster0.uxwt3.mongodb.net/?retryWrites=true&w=majority',
    {}
  )
  .then(() => {
    console.log('MongoDB Connected...')
  })
  .catch((err) => {
    console.log(err)
  })

function handleListening() {
  console.log(`Listening on: http://localhost:${PORT}`)
}

function handleHome(req, res) {
  res.send('hello')
}

app.get('/', handleHome)

app.listen(PORT, handleListening)
