const mongoose = require('mongoose');

var Question = mongoose.model('Question', {
    question: { type: String },
    createdOn: { type: String },
    updatedOn: { type: String },
    type: { type: String },
    category: { type: String },
    createdBy: { type: String },
    updatedby: { type: String }
});

module.exports = { Question };