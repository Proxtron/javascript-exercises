const repeatString = function(sourceString, timesToRepeat) {
    if(timesToRepeat < 0) {
        return "ERROR";
    } else if (timesToRepeat == 0) {
        return "";
    } else {
        let stringAccumulator = "";
        for(let i = 0; i < timesToRepeat; i++) {
            stringAccumulator += sourceString;
        }
        return stringAccumulator;
    }
};

// Do not edit below this line
module.exports = repeatString;
