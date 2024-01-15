require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.send('wass up!')
  })

  app.get('/signup', (req, res) => {
    res.send('wass up there guys!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

console.log(process.env)