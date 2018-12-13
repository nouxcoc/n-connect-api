const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Course } = require('../models/course');

// GET : localhost:3000/courses/
router.get('/', (req, res) => {
    Course.find((err, docs) => {
        if (!err) { res.send(docs); }
        else {
            console.log('Error in Retrieving  : ' + JSON.stringify(err, undefined, 2));
        }
    });
});

// GET : localhost:3000/courses/_id
router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);
    Course.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else {
            console.log('Error in Retrieving Employee  : ' + JSON.stringify(err, undefined, 2));
        }
    });
});

// POST : localhost:3000/courses/
router.post('/', (req, res) => {
    var course = new Course({
        title: req.body.title,
        watchHref: req.body.watchHref,
        authorId: req.body.authorId,
        length: req.body.length,
        category: req.body.category
    });
    course.save((err, doc) => {
        if (!err) {
            res.send(doc);
        }
        else {
            console.log('Error in Employee Save  : ' + JSON.stringify(err, undefined, 2));
        }

    });
});


//  PUT : localhost:3000/courses/_id
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var course = {
        title: req.body.title,
        watchHref: req.body.watchHref,
        authorId: req.body.authorId,
        length: req.body.length,
        category: req.body.category
    };

    Course.findByIdAndUpdate(req.params.id, { $set: course }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else {
            console.log('Error in Employee Update  : ' + JSON.stringify(err, undefined, 2));
        }
    });
});

//  DELETE : localhost:3000/courses/_id
router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Course.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else {
            console.log('Error in Employee Delete  : ' + JSON.stringify(err, undefined, 2));
        }
    });

});




module.exports = router;