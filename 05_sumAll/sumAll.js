const sumAll = function(l, s) {

    if ( l<0 || s<0){
        return "ERROR";
    }
    if (!Number.isInteger(l) || !Number.isInteger(s)) return "ERROR";

    if (s>l){
        let foo = l;
        l = s;
        s = foo;
    }
    
    let sum = 0;


    for (let i = s ; i<= l; i++){
        sum += i;
    }   

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
