const mongoose = require("mongoose")

const DB = "mongodb://GovindLowanshi:Govind123456@ac-lutphgs-shard-00-00.di36ouq.mongodb.net:27017,ac-lutphgs-shard-00-01.di36ouq.mongodb.net:27017,ac-lutphgs-shard-00-02.di36ouq.mongodb.net:27017/e-comm?ssl=true&replicaSet=atlas-131k5b-shard-0&authSource=admin&retryWrites=true&w=majority"
mongoose.Promise = global.Promise; // Use this line.

mongoose.connect(DB ,  function (err) {
    if (err) {
        console.log('not connected to data base' ,  err);
    }
    else {
        console.log('Successfully Connected to database');
    }
});


