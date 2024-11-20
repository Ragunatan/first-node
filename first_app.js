const http = require('http')
const server = http.createServer((req,res) =>{
  console.log('Ragunathan')

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
})

server.listen(5000,() =>{
  console.log('running')
})

