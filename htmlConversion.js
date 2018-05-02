var trumpet = require("trumpet");
var tr = trumpet();
var through = require("through2");

// process.stdin.pipe(tr);

// tr.select(".beep").createSteam.pipe(process.stdout);

var loud = tr.select('.loud').createStream();
loud.pipe(through(function(data, encoding, next){
		this.push(data.toString().toUpperCase());
		next();
	})).pipe(loud);


process.stdin.pipe(tr).pipe(process.stdout);