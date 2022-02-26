const removeFromArray = function(...args) {
    const array = args[0];
    const newArray = [];
    array.forEach(element => {
        if (!args.includes(element)) {
            newArray.push(element);
        }
    })
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
