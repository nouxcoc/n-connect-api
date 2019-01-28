const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Project } = require('../models/project');

// GET : localhost:3000/projects/
router.get('/', (req, res) => {
    Project.find((err, docs) => {
        if (!err) { res.send(docs); }
        else {
            console.log('Error in Retrieving  : ' + JSON.stringify(err, undefined, 2));
        }
    });
});


// POST : localhost:3000/projects/
router.post('/', (req, res) => {
    var project = new Project({
        name: req.body.name,
        createdOn: req.body.createdOn,
        updatedOn: req.body.updatedOn,
        type: req.body.type,
        manager: req.body.manager,
        uxDesigner: req.body.uxDesigner,
        estimatedHours: req.body.estimatedHours,
        spentHours: req.body.spentHours,
        active: req.body.active,
        userId: req.body.userId,
        tectStack: req.body.tectStack
    });
    project.save((err, doc) => {
        if (!err) {
            res.send(doc);
        }
        else {
            console.log('Error in ToDo Item Save  : ' + JSON.stringify(err, undefined, 2));
        }
    });
});


//  PUT : localhost:3000/questions/_id
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var project = {
        name: req.body.name,
        createdOn: req.body.createdOn,
        updatedOn: req.body.updatedOn,
        type: req.body.type,
        manager: req.body.manager,
        uxDesigner: req.body.uxDesigner,
        estimatedHours: req.body.estimatedHours,
        spentHours: req.body.spentHours,
        active: req.body.active,
        userId: req.body.userId,
        tectStack: req.body.tectStack,
    };

    Project.findByIdAndUpdate(req.params.id, { $set: project }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else {
            console.log('Error in ToDo Update  : ' + JSON.stringify(err, undefined, 2));
        }
    });
});

//  DELETE : localhost:3000/questions/_id
router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Project.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else {
            console.log('Error in ToDo Delete  : ' + JSON.stringify(err, undefined, 2));
        }
    });

});




module.exports = router;