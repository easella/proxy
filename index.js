var http = require("http")
var Unblocker = require("unblocker")
var unblocker = Unblocker({})
http.createServer(function(req,res){
  unblocker(req,res,function(err){
    var headers = {"content-type": "text/html" }
    if(err){
      res.writeHead(500, headers)
      return res.end(err.stack || err)
    }
    if(req.url == "/"){
      res.writeHead(200, headers)
      return res.end(
        `<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
       <form class="text-center" onsubmit="return false;">
       <input id="url" type="url" class="form-control"/>
<input id="sub" type="submit" value="Unblock" class="btn btn-danger"onclick="loadProxy(document.getElementById('url').value)" />
</form>
<script>
function loadProxy(url){
  url=url.replace('//','/')
  window.location.href='https://luckypapers-2.awdrgyjil1234.repl.co/proxy/'+url;
 
}
 </script>

        `
      )
    }else{
      res.writeHead(404, headers)
      return res.end("ERROR 404: File Not Found.");
    }
  })
})
.listen(8080)