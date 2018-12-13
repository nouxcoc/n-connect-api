const mongoose = require('mongoose');

var Course = mongoose.model('Course', {
    //id: { type: String },
    title: { type: String },
    watchHref: { type: String },
    authorId: { type: String },
    length: { type: String },
    category: { type: String }
});

module.exports = { Course };