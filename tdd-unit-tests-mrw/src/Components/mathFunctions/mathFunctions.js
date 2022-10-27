//asd

function addNums(x, y){
    
    
    if(isNaN(x) ||  isNaN(y)){
        throw TypeError("Must be Arabic numeral");
    }
    
    if(x === undefined || y === undefined){
        throw ReferenceError
    }
    
    else{
        let result = parseInt(x) + parseInt(y);
        return result
    }
    
};

function subNums(x, y){
    return x - y
};

function multiplyNums(x, y){
    return x * y
};

function divideNums(x, y){
    if(x === 0 || y === 0){
        return undefined
    }
    else{
        return x/y
    }
    
};

export {addNums, subNums, multiplyNums, divideNums}