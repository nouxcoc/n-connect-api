const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { ToDo } = require('../models/todo');

// GET : localhost:3000/todolist/userid
router.get('/:userId', (req, res) => {
    console.log(req.params.userId);
    if (!ObjectId.isValid(req.params.userId))
        return res.status(400).send(`No record with given id : ${req.params.userId}`);
    ToDo.find({ userId: req.params.userId }, (err, doc) => {
        if (!err) { console.log(doc); res.send(doc); }
        else {
            console.log('Error in Retrieving ToDo List  : ' + JSON.stringify(err, undefined, 2));
        }
    });
});


// POST : localhost:3000/todolist/
router.post('/', (req, res) => {
    var todo = new ToDo({
        title: req.body.title,
        createdOn: req.body.createdOn,
        updatedOn: req.body.updatedOn,
        type: req.body.type,
        active: req.body.active,
        userId: req.body.userId,
    });
    todo.save((err, doc) => {
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

    var todo = {
        title: req.body.title,
        createdOn: req.body.createdOn,
        updatedOn: req.body.updatedOn,
        type: req.body.type,
        active: req.body.active,
        userId: req.body.userId,
    };

    ToDo.findByIdAndUpdate(req.params.id, { $set: todo }, { new: true }, (err, doc) => {
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

    ToDo.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else {
            console.log('Error in ToDo Delete  : ' + JSON.stringify(err, undefined, 2));
        }
    });

});




module.exports = router;