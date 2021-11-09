// const postman=require('./postman')
// postman.writemsg('hello!!')
// console.log("postman=",postman)
// console.log(postman.url)
const http=require('http')
const fs=require('fs')

http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'text/html'})
  
  fs.readFile('index.html',function(err,data){
    res.write(data)
    res.end()
    })
}).listen(5000)


