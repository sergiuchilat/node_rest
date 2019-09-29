const express = require ('express');
const app = express();
const bodyParser = require('body-parser');

const mysql = require('mysql');
const routes= require('./routes/routes')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'web2'
});
connection.connect();
routes(app, connection);
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000);
