const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Note } = require('../models/note');

// GET : localhost:3000/notes/userid
router.get('/:userId', (req, res) => {
    if (!ObjectId.isValid(req.params.userId))
        return res.status(400).send(`No record with given id : ${req.params.userId}`);
    Note.find({ userId: req.params.userId }, (err, doc) => {
        if (!err) { res.send(doc); }
        else {
            console.log('Error in Retrieving Note List  : ' + JSON.stringify(err, undefined, 2));
        }
    });
});


// POST : localhost:3000/notes/
router.post('/', (req, res) => {
    var note = new Note({
        title: req.body.title,
        createdOn: req.body.createdOn,
        updatedOn: req.body.updatedOn,
        type: req.body.type,
        label: req.body.label,
        userId: req.body.userId,
    });
    note.save((err, doc) => {
        if (!err) {
            res.send(doc);
        }
        else {
            console.log('Error in Note Item Save  : ' + JSON.stringify(err, undefined, 2));
        }
    });
});


//  PUT : localhost:3000/questions/_id
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var note = {
        title: req.body.title,
        createdOn: req.body.createdOn,
        updatedOn: req.body.updatedOn,
        type: req.body.type,
        label: req.body.label,
        userId: req.body.userId,
    };

    Note.findByIdAndUpdate(req.params.id, { $set: note }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else {
            console.log('Error in Note Update  : ' + JSON.stringify(err, undefined, 2));
        }
    });
});

//  DELETE : localhost:3000/questions/_id
router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Note.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else {
            console.log('Error in Note Delete  : ' + JSON.stringify(err, undefined, 2));
        }
    });

});




module.exports = router;