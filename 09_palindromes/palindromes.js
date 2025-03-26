const palindromes = function (str) {
    const alphanumeric = "abcdefghijklmnopqrstuvwxyz0123456789";
    const cleanedStr = str.toLowerCase().split("").filter((char) => alphanumeric.includes(char)).join("");
    const strReverse = cleanedStr.split("").reverse().join("");
    return cleanedStr === strReverse;
};

// Do not edit below this line
module.exports = palindromes;
