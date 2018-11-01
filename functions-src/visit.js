exports.handler = function(event, context, callback) {
  console.log(event, context);
  callback(null, {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin" : "*",
      "Access-Control-Allow-Headers": "Content-Type"
    },
    body: "Worldx",
  });
}