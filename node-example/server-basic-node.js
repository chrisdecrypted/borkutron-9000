const http = require ("http");

const server = http.createServer(function(req,res){
    // req is short for request
    // res is short for response
    // both are part of the http module which is itself part of CommonJS (in node)
    console.log(`user visited ${req.url}`);
    res.end("Hello!");
    
});

console.log("listening on http://localhost:2001");
server.listen(2001);

// It wouldn't be typical for a programmer to write code like this. Instead a 
// framework like express would be used. 