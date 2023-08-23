const fibonacci = function(num) {
    let prev1 = 0;
    let prev2 = 1;
    if (num < 0) {
        return "OOPS";
    } else if (num === 0) {
        return 0;
    } else {
        for (let i = 2; i <= num; i++) {
            let current = prev1 + prev2;
            prev1 = prev2;
            prev2 = current;

        }
    }
    return prev2;
};

// Do not edit below this line
module.exports = fibonacci;
