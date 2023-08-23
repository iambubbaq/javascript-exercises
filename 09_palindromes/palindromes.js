const palindromes = function (phrase) {
    let initial = phrase.replace(/[\.,?! ]/g, "").split("").join("").toLowerCase();
    let reverse = initial.split("").reverse().join("");;
    return initial === reverse;
};

// Do not edit below this line
module.exports = palindromes;
