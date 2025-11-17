function sumAll(a, b) {
if ( !(Number.isInteger(a)) || (!(Number.isInteger(b)) || (a < 0) || (b < 0)) ) {   
    return 'ERROR';
}
else {
    let arred = [a,b];   
    let sorted = arred.toSorted((x, y) => x-y);    
    
    let ranged = []
    for (let i=(sorted[0]); i<=sorted[1]; i++) {        
        ranged.push(i);
    }    
    
    let summed;    
    summed = ranged.reduce(function(acc, curr) {
        return (acc + curr)
    }, 0) 
    return summed;}      
}


// Do not edit below this line
module.exports = sumAll;
