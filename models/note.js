
const mongoose = require('mongoose');

var Note = mongoose.model('Note', {
    title: { type: String },
    createdOn: { type: String },
    updatedOn: { type: String },
    type: { type: String },
    label: { type: String },
    userId: { type: String },
});

module.exports = { Note };