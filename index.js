require("dotenv").config()//load env variables from .env file

const express = require('express');
const app = express()
app.use(express.json()); //Parsing JSON bodies automatically

app.get("/", (req, res) => res.send('My week2 API!'));

app.post("/user", (req, res) => {
    const { name, email} = req.body;
    if (!name || !email) return res.status(400).json({ error: "Missing fields" });
    res.status(201).json({ message: `Hello, ${name}!` });
});

app.get("/user/:id", (req, res) => {
    const {id} = req.params; res.send(`User ${id} profile`);
});

//Dynamic port
const port = process.env.PORT
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})