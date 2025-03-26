const reverseString = function(stringToReverse) {
    let reversedStringAccumulator = "";
    for(let i = stringToReverse.length - 1; i >= 0; i--) {
        reversedStringAccumulator += stringToReverse[i]
    }
    return reversedStringAccumulator;
};

// Do not edit below this line
module.exports = reverseString;
