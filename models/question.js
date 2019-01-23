const mongoose = require('mongoose');

var Question = mongoose.model('Question', {
    title: { type: String },
    createdOn: { type: String },
    updatedOn: { type: String },
    type: { type: String },
    categoryId: { type: String },
    createdBy: { type: String },
    updatedBy: { type: String }
});

module.exports = { Question };