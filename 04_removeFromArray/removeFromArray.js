const removeFromArray = function(arr, ...targets) {
    let solution = arr;
    for(const target of targets) {
        solution = solution.filter((element) => element !== target);
    }
    return solution
};

// Do not edit below this line
module.exports = removeFromArray;
