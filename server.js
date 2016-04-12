var hl = require("./lib/handlers.js");
    
var http = require("http"), util = ("util"); fs = require("fs");

var serverUrl = "127.0.0.1", port = 8124;
var path = "./data/parameters.json";
  

var server = http.createServer(function(req, res) {


      hl.appendJsonToDisk( path, hl.getValidParams( req.url ), hl.readJson( path ) )      


      if ( hl.getValidParams(req.url).hasOwnProperty('count') )      
          hl.insertDataToDatabase( 'count' ,  hl.getValidParams(req.url).count );


      res.setHeader("Content-Type", "text/html");
      req.write('<p><a href="http://'+ serverUrl + ':' + port + '/sample?a=1&b=3&count=5">Link 1 count=5</a></p>');
      res.write('<p><a href="http://'+ serverUrl + ':' + port + '/sample?a=3&b=5">Link 2 params only</a></p>');
      res.end ('<p><a href="http://'+ serverUrl + ':' + port + '/sample">Link 3</a></p>');


});

console.log("Starting web server at " + serverUrl + ":" + port);
server.listen(port, serverUrl);
