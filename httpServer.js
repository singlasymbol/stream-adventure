// In this challenge, write an http server that uses a through stream to write back
// the request stream as upper-cased response data for POST requests.

var through = require("through2")
var http = require("http")

var server = http.createServer(function(req, res){
	if(req.method == "POST") {
		req.pipe(through(function(data, encoding, next){
			this.push(data.toString().toUpperCase())
			next()
		},function(done){done();})).pipe(res)
	}
})


server.listen(process.argv[2])