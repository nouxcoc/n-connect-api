const mongoose = require('mongoose');

var Message = mongoose.model('Message', {
    msg: { type: String },
    user: { type: String },
    time: { type: String },
});

module.exports = { Message };