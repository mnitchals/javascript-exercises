const reverseString = function(str) {
    const strArray = str.split('');
    let retStr = '';
    for (let x=strArray.length -1; x > -1; x--) {
        retStr += strArray[x];
    }
    return retStr;
};

// Do not edit below this line
module.exports = reverseString;
