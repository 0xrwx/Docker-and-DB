const mysql = require('mysql2');

const express = require('express')
const path = require('path');

const app = express()
const port = process.env.PORT || 8080

const connection = mysql.createPool({
  connectionLimit: 10,
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "password",
  database: process.env.MYSQL_DATABASE || "test",
});

app.get("/comments", (req, res) => {
  connection.query("SELECT * FROM Comments", (err, rows) => {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/hi', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

