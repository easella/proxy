var http = require("http")
var Unblocker = require("unblocker")
var unblocker = Unblocker({})
http.createServer(function(req,res){
  unblocker(req,res,function(err){
    var headers = {"content-type": "text/html"}
    if(err){
      res.writeHead(500, headers)
      return res.end(err.stack || err)
    }
    if(req.url == "/"){
      res.writeHead(200, headers)
      return res.end(
        `
        <title>Seventh Grade by Gary Soto</title>
        <embed src="https://www.cforks.org/Downloads/7.pdf" width="1500" height="1500"/>
        `
      )
    }else{
      res.writeHead(404, headers)
      return res.end("ERROR 404: File Not Found.");
    }
  })
})
.listen(8080)