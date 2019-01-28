const mongoose = require('mongoose');

var Project = mongoose.model('Project', {
    name: { type: String },
    createdOn: { type: String },
    updatedOn: { type: String },
    type: { type: String },
    manager : {type : Array},
    uxDesigner : {type : Array},
    estimatedHours : {type : String},
    spentHours : {type : String},
    active: { type: Boolean },
    userId: { type: String },
    tectStack : {type : Array}
});

module.exports = { Project };