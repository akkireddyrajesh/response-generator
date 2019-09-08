## response-generator
    
    module for generating REST API response.

## Installation

    npm install response-generator --save

## Usage
```js
const ResponseGenerator = require('response-generator');

let config = {
    "ver": "0.0.1"
}
let ResponseGen = new ResponseGenerator['responseGen'](config).res();
console.log(`response object is `, ResponseGen);

```    

## License

MIT