const ResponseGenerator = require('./index');

let config = {
    "ver": "0.0.1"
}
let ResponseGen = new ResponseGenerator['responseGen'](config).res();
console.log(`response object is `, ResponseGen);