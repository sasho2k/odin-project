const repeatString = function(string, times) {
    return times < 0 ? "ERROR" : Array(times).fill(string).join('');
};

// Do not edit below this line
module.exports = repeatString;
