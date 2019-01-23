const express = require('express');
const bodyParser = require('body-parser');
// var http = require('http').Server(app);

const cors = require('cors');

const { mongoose } = require('./db.js');
var courseController = require('./controllers/courseController');
var questionController = require('./controllers/questionController');
var authController = require('./auth/authController');
var userController = require('./user/userController');
var messageController = require('./controllers/messageController');
var todoListController = require('./controllers/todoController');
var notesController = require('./controllers/notesController');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:3001' }));

var server = app.listen(3000, () => console.log('Server started at port : 3000'));
var io = require('socket.io').listen(server);

io.on("connection", socket => {
  socket.on('message', function (msg) {
    setTimeout(() => socket.broadcast.emit("ChatUpdate", msg), 100);
  });
  socket.on("disconnect", () => console.log("Client disconnected"));
});
//   const getApiAndEmit = async socket => {
//     try {
//       const res = await axios.get(
//         "https://api.darksky.net/forecast/PUT_YOUR_API_KEY_HERE/43.7695,11.2558"
//       );
//       socket.emit("FromAPI", res.data.currently.temperature);
//     } catch (error) {
//       console.error(`Error: ${error.code}`);
//     }
//   };

app.use('/courses', courseController);
app.use('/questions', questionController);
app.use('/auth', authController);
app.use('/users', userController);
app.use('/messages', messageController);
app.use('/todolist', todoListController);
app.use('/notes', notesController);

module.exports = app;


