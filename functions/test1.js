exports.handler = function(event, context, callback) {
  console.log(event, context);
  callback(null, {
    statusCode: 200,
    body: process.env.DB_UR
  });
}
