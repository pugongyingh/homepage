exports.handler = function(event, context, callback) {

 var pg = require('pg');
//or native libpq bindings
//var pg = require('pg').native
  const response ={
        statusCode: 200,
        body: "999",
    };
var conString =  'postgres://juicmaka:okUGxNKWk6CtRezIOHLBHxPbYiGMiQcS@arjuna.db.elephantsql.com:5432/juicmaka'
var client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT  * FROM  behaviour_sample8', function(err, result) {
    if(err) {
        response = {
        statusCode: 200,
        body: "noo",
    };
    }
    
           response = {
        statusCode: 200,
        body: JSON.stringify(result.rows[0]),
    };
   //console.log(result.rows[0].theTime);
    // >> output: 2018-08-23T14:02:57.117Z
    client.end();
  });
});
 
 
 
 return response;
}
