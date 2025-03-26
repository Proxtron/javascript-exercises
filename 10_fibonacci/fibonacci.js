const fibonacci = function(nth) {
    nth = parseInt(nth);
    if(nth < 0) return "OOPS";
    if(nth === 0) return 0;
    if(nth === 1 || nth === 2) return 1;

    const numArr = [1, 1];
    for(let i = 2; i <= nth; i++) {
        const nextNum = numArr[i - 1] + numArr[i - 2];
        numArr.push(nextNum);
    }
    return numArr[nth - 1];
};

// Do not edit below this line
module.exports = fibonacci;
