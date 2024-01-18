require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const githubData = {
    "a":1,
    "k":3,
    "s":5,
    "e":6,
    "d":7,
    "c":8,
    "b":9,
}

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
app.get("/github",(req,res)=>{
    res.json(githubData)
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });