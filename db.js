const mongoose = require('mongoose');
//const localdburl = "mongodb://localhost:27017/CRUD_DB";
const dburl = "mongodb://anil:munny.376@ds113925.mlab.com:13925/crud_db";
mongoose.connect(dburl, (err) => {
    if (!err)
        console.log('MongoDB connection success...');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;