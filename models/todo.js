const mongoose = require('mongoose');

var ToDo = mongoose.model('ToDo', {
    title: { type: String },
    createdOn: { type: String },
    updatedOn: { type: String },
    type: { type: String },
    active: { type: Boolean },
    userId: { type: String },
});

module.exports = { ToDo };