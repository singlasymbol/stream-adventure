var through2 = require("through2")
var split = require("split")
var lineNumber = 1;

function end(done) {
	done()
}

process.stdin
    .pipe(split())
    .pipe(through2(function (line, _, next) {
    	if(lineNumber % 2 == 1){
    		// console.log("data is ", line.toString())
	        this.push(line.toString().toLowerCase() + "\n")
    	}
	    else{
    		// console.log("data is ", line.toString())	
	    	this.push(line.toString().toUpperCase() + "\n")
	    }
	    lineNumber++;
        next();
    }, end)).pipe(process.stdout)
;