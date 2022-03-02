const fibonacci = function(index) {
    if (index < 0) return "OOPS";
    if (index === 0) return 0;
    let a = 0;
    let b = 1;
    for (let i = 1; i < index; i++) {
        let temp = b;
        b = a + b;
        a = temp;
    } 
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
