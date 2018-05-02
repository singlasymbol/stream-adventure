var duplexer = require('duplexer2');
var through = require('through2').obj;

module.exports = function (counter) {
    var counts = {};
    var input = through(write, end);
    return duplexer({objectMode: true}, input, counter);
    
    function write (row, _, next) {
        counts[row.country] = (counts[row.country] || 0) + 1;
        next();
    }
    function end (done) {
        counter.setCounts(counts);
        done();
    }
};



// Return a duplex stream with the `counter` as the readable side. You will be
// written objects with a 2-character `country` field as input, such as these:

//     {"short":"OH","name":"Ohio","country":"US"}
//     {"name":"West Lothian","country":"GB","region":"Scotland"}
//     {"short":"NSW","name":"New South Wales","country":"AU"}

// Create an object to track the number of occurrences of each unique country code.

// For example:

//     {"US": 2, "GB": 3, "CN": 1}

// Once the input ends, call `counter.setCounts()` with your counts object.