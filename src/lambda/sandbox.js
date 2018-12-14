//This is reference file for functions
//Best used with netlify-lambda CLI tool for local development and serving
//it's included in package.json

//to trigger for local dev use, in CLI at project root type:  npm run start-lambda
import secrets from '../../secrets'

const obj = {
  foo: 'bar',
  spam: 'eggs',
}

const MONGODB_URI = secrets.ATLAS_DB

exports.handler = function(event, context, callback) {
  console.log('event object is:  ', event) //receive info from the client and event related info
  console.log('context object is:  ', context) // provides user context, including identity claim etc

  /*OPTIONAL - callback invoked only to return data to client.  
    first arg :  error
    second arg: object with status code, body etc
    reference:  https://www.netlify.com/docs/functions/#tools-for-building-javascript-functions
  */

  callback(null, {
    statusCode: 200,
    body: 'This works!', // BODY must send back a string (incl JSON string.)
    // body: JSON.stringify({ msg: 'Hello, World!', ...obj }),
    // body: MONGODB_URI,
  })
}
