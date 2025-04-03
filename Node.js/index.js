const http = require('http')

const data = require('./data');
const { json } = require('stream/consumers');


http.createServer((req,res)=>{
    res.writeHead({'Content-type': 'application\json'});
    res.write(200,JSON.stringify(data));
    res.end();
}).listen(5000);


