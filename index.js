
//calling the packages to be used in out  project 
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require("./routes/UsersRoutes");


//=====================================================================App use
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(bodyParser.json({ limit: '10mb', extended: true }));
app.use(cors());
 




//===================================================================== routes
app.use("/user", userRoutes);




//===================================================================== port 5000
app.set('port', Number(process.env.PORT || 5000));
const server = app.listen(app.get('port'), function () {
    console.log('Listening on ' + app.get('port'));
});



//=====================================================================localhost connection
mongoose.connect('mongodb://localhost:27017/school',
    {
        useCreateIndex: true,
        useNewUrlParser: true
    }
    , function () { 
        console.log("App connected to database")
    });