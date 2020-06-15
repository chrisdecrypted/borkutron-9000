const express = require ("express");

const app = express(); // instance of express server

// routing is described by app.get(route, function(req,res){});

app.get("/", function(req,res){
    res.end("Welcome to my site!");
});

app.get("/complement", function(req,res){
    res.end("You look nice today.");
});

app.listen(3000);
console.log("Listening on http://localhost:3000");