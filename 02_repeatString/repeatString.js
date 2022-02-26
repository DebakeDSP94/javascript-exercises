let repString;
const repeatString = function(string, num) {
    repString = '';
    if ( num < 0 ) {
        return "ERROR";
    }

    for (let i = 0; i  < num; i++){
        repString = string + repString;
    }
    return repString;
};


// Do not edit below this line
module.exports = repeatString;
