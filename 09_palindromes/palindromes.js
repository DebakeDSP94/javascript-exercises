
const palindromes = function (string) {
 //   string = string.toLowerCase();
 //   string.replace((".",',',"!","?"), "");
 //   const strArray = [...string];
 //   const revArray = strArray.reverse();
 //   for (let i = 0; i < strArray.length; i++) {
 //       if (strArray[i] !== revArray[i]) {
 //           return false;
 //       }  
 //       else {return true};
 //   }
    processedString = string.toLowerCase().replace(/[^a-z]/g, "");
    return (
        processedString
            .split("")
            .reverse()
            .join("") == processedString
    );
};

// Do not edit below this line
module.exports = palindromes;
