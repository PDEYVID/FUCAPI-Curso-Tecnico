


function sePar(num){
    if(num%2==0){
        return true;
    }else{
        return false;
    }
}

function sePar2(num){
    if(num%2==0){
        return true;
    }
        return false; 
}

function sePar3(num){
    if(! (num%2)){
        return true;
    }
        return false;
}

function sePar4(num){
    return !(num%2)
}

const sePar5 = num => ! (num%2)

console.log(sePar(3));
console.log(sePar2(2));
console.log(sePar3(11));
console.log(sePar4(10));
console.log(sePar4(11));
console.log(sePar5(10));
console.log(sePar5(11));