// use http 

const http = require('http')

http.createServer((req,res)=>{
  res.write('hello Kya Haal hai Server Ready hai')
   res.end();        
}).listen(6000)



