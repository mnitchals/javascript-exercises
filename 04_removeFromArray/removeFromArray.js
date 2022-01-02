const removeFromArray = function(origArray, ...args) {
 let newArray = [];
 for (let x=0; x < origArray.length; x++)
 {
     if (args.indexOf(origArray[x]) < 0) {
        newArray.push(origArray[x])
     }
 }
 return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
