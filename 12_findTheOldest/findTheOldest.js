const findTheOldest = function(people) {
    return people.reduce((oldest, nextOldest) => {
        if(nextOldest.hasOwnProperty('yearOfDeath')) {
            const age = nextOldest.yearOfDeath - nextOldest.yearOfBirth;
            nextOldest.age = age;
        } else {
            const age = new Date().getFullYear() - nextOldest.yearOfBirth;
            nextOldest.age = age;
        }
        if (!oldest.hasOwnProperty('age')){
            oldest = nextOldest;
        } else if (nextOldest.age > oldest.age) {
            oldest = nextOldest;
        }
        return oldest;
    }, {});
    
};

// Do not edit below this line
module.exports = findTheOldest;
