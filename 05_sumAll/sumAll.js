const sumAll = function(num1, num2) {
    if(num1 < 0 || num2 < 0) {
        return "ERROR";
    } else if(typeof num1 != "number" || typeof num2 != "number") {
        return "ERROR";
    } else if(!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    }

    const biggerNum = Math.max(num1, num2)
    const smallerNum = Math.min(num1, num2);
    let accumulator = 0;
    for(let i = smallerNum; i <= biggerNum; i++) {
        accumulator += i;
    }
    return accumulator;
};

// Do not edit below this line
module.exports = sumAll;
