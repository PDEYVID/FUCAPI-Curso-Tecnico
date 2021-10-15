const soma = function(a,b){
    return a+b;
}

 console.log( soma(2,3))

 const somaTetra = function(a,b,c,d){
    /*let result = soma(a,b);

    result = soma(result,c);
    result = soma(result,d)
    return result;*/
    return  soma( soma( soma( a,b) , c ) , d)
 }

 console.log( somaTetra(1,2,3,4))