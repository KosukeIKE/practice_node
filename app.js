const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const port = ('3000');


app.listen(port, function() {
    console.log();
    console.log();
    console.log();
    console.log();
    console.log();
    console.log("the server is running");
})
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}))


app.get('/', function(req, res){
    res.sendFile(__dirname + '/signup.html');
});


app.get('/success', function(req, res){
    res.sendFile(__dirname + '/success.html')
    
});


app.post('/', function(req,res){
    const fName = req.body.fName;
    const lName = req.body.lName;
    const Email = req.body.Email;

    
    console.log(fName, lName, Email);
});

