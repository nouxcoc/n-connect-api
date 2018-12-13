const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var employeeController = require('./controllers/employeeController');
var courseController = require('./controllers/courseController');
var authController = require('./auth/authController');
var userController = require('./user/userController');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(3000, () => console.log('Server started at port : 3000'));
app.use('/employees', employeeController);
app.use('/courses', courseController);
app.use('/auth', authController);
app.use('/users', userController);

module.exports = app;


