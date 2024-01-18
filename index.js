require('dotenv').config()

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send("Prakhar Tripathi")
})
app.get('/login', (req, res) => {
    res.send("<h1>login<h1>")
})
app.get('/new', (req, res) => {
    res.send("<h1> backend<h1>")
})

app.listen(process.env, () => {
    console.log(`Example app listening on port`)
})