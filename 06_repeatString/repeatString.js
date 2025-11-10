const repeatString = function(string, num) {
    let repeated = ('');
    while ((repeated.length) != (string.length * num)) {
       repeated = repeated.concat(string);
    if (num <= 0) {
        return 'ERROR'
    }
    }
return repeated
}

// Do not edit below this line
module.exports = repeatString;
