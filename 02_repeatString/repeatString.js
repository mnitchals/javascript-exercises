<<<<<<< Updated upstream
const repeatString = function() {

=======
const repeatString = function(phrase, times) {
    let returnString = '';
    if (times < 0) {
        return "ERROR"
    }
    else {
        for (let x = 0; x < times; x++) {
            returnString += phrase;
        }
        return returnString;
    }
>>>>>>> Stashed changes
};

// Do not edit below this line
module.exports = repeatString;
