var fs = require("fs");
var host = "127.0.0.1";
var port = 8000;
var express = require("express");

var app = express();
app.use(express.static(__dirname + "/public")); //use static files in ROOT/public folder

app.get("/getData", function(request, response){ //root dir
    //fetch from db
    //response can be index.html
    response.send("Hello!!");
});

app.listen(port, host);