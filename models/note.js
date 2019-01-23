
const mongoose = require('mongoose');

var Note = mongoose.model('Note', {
    title: { type: String },
    createdOn: { type: String },
    updatedOn: { type: String },
    type: { type: String },
    active: { type: Boolean },
    userId: { type: String },
});

module.exports = { Note };