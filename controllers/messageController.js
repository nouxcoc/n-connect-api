const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Message } = require('../models/message');

// GET : localhost:3000/discussion/
router.get('/', (req, res) => {
    Message.find((err, docs) => {
        if (!err) { res.send(docs); }
        else {
            console.log('Error in Retrieving  : ' + JSON.stringify(err, undefined, 2));
        }
    });
});

// GET : localhost:3000/questions/_id
router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);
    Message.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else {
            console.log('Error in Retrieving Employee  : ' + JSON.stringify(err, undefined, 2));
        }
    });
});

// POST : localhost:3000/questions/
router.post('/', (req, res) => {
    var message = new Message({
        msg: req.body.msg,
        user: req.body.user,
        time: req.body.time,
    });
    message.save((err, doc) => {
        if (!err) {
            res.send(doc);
        }
        else {
            console.log('Error in Employee Save  : ' + JSON.stringify(err, undefined, 2));
        }

    });
});


//  PUT : localhost:3000/questions/_id
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var message = {
        msg: req.body.msg,
        user: req.body.user,
        time: req.body.time,
    };

    Message.findByIdAndUpdate(req.params.id, { $set: message }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else {
            console.log('Error in Employee Update  : ' + JSON.stringify(err, undefined, 2));
        }
    });
});

//  DELETE : localhost:3000/questions/_id
router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Message.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else {
            console.log('Error in Employee Delete  : ' + JSON.stringify(err, undefined, 2));
        }
    });

});




module.exports = router;