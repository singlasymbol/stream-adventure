var concatStream = require('concat-stream')

function callback(data) {
	// console.log("data ", data.toS);
	data =  data.toString()
	console.log(data.split("").reverse().join(""));
}

process.stdin.pipe(concatStream(callback))