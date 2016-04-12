var  url = require("url"),
  qs = require("querystring"), 
  fs = require('fs'), 
  redis = require ('redis');

var exports = module.exports = {


  getValidParams: function ( requrl ) {

     var params = qs.parse( url.parse(requrl).query);

     if ( JSON.stringify(params) != '{}' )     
         return params;
       else return false

  },

 
  readJson: function ( path ){
   
  var json = new Object;

    if (fs.existsSync(path)) {

         var data =  fs.readFileSync(path, 'utf8'); 

         if (data == '') return json = JSON.parse('[]');
           else return json = JSON.parse(data);
    
    }
    else return  json = JSON.parse('[]'); 
   
  },


  appendJsonToDisk: function ( path, params, json ) {
     
      if ( params != false )  {

        try {
 
           json.push( params ); 

           var data = JSON.stringify(json);
 
           fs.writeFile( path, data , function (err) {
              if (err) console.log('Data is not saved! '); 
              else  console.log('Data are saved as JSON!');
           });
 
        } catch (err) { console.log('Append Json parametrs failed' + '   ' + err);

        }
     }
  },
  

  insertDataToDatabase: function ( keyname, data ) {

        var client = redis.createClient();
   
        client.on("error", function (err) {
        console.log("Error Redis " + err);
        });   

        client.incrby (keyname, data, redis.print);        
  }


};
