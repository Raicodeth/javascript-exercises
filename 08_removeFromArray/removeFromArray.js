function removeFromArray(arr) {
    const args = Array.prototype.slice.call(arguments, 1);
    let filtered = [];
    for (ele of arr) {
        if (!(args.includes(ele))) {
            filtered.push(ele);            
        }        
    }
    return filtered;              
}

// Do not edit below this line
module.exports = removeFromArray;
