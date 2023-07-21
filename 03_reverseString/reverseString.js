const reverseString = function(string) {
    letters = string.toString().split("");
    reverse = letters.reverse().join("");
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
