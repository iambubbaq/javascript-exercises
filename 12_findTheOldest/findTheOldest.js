const findTheOldest = function(people) {
    let oldest = people.sort(function(a, b) {
        let prev;
        let next;
        if (!a.yearOfDeath) {
            a.yearOfDeath = new Date().getFullYear();
            prev = a.yearOfDeath - a.yearOfBirth;
            next = b.yearOfDeath - b.yearOfBirth;
            return prev > next ? -1 : 1;
        } else if (!b.yearOfDeath) {
            b.yearOfDeath = new Date().getFullYear();
            prev = a.yearOfDeath - a.yearOfBirth;
            next = b.yearOfDeath - b.yearOfBirth;
            return prev > next ? -1 : 1;
        } else {
            prev = a.yearOfDeath - a.yearOfBirth;
            next = b.yearOfDeath - b.yearOfBirth;
            return prev > next ? -1 : 1;
        }
    });
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
