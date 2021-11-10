const http=require('http')
const fs=require('fs')
const url=require('url')


let data={"123":"shivam post 1","124":"imtiyaz post 1","125":"ANI post1"}



// little challenge

// we are not able to get value of key "123" when we put data[postId] [ex: where postId=123]
//the challenge is debug and solve the issue why we are not getting "shivam post 1" msg
//hint local variables

http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'text/html'})
  let q=url.parse(req.url,true)
  let pathname=q.pathname
  let postId=q.query.postId
  if(pathname==='/login'){
    fs.readFile('login.html',function(err,data){
      res.write(`<h1>${postId}</h1>`)
      // res.write(`<h1>${data[postId]}</h1>`)
      res.write(data)
      res.end()
      })
  }
  else{
    fs.readFile('404.html',function(err,data){
      res.write(data)
      res.end()
      })
  }
  


}).listen(5000)


