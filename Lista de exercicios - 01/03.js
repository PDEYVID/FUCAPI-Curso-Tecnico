/*3. Crie duas varíaveis const soma e somaTetra. Elas farão o seguinte

a. soma: Receberá uma função que aceita dois parâmetros e retorna a soma
deles

b. somaTetra: Receberá uma função com 4 parâmetros, e some os 4
números, utilize a função soma 3 vezes

i. Ex: somará parâmetros 1 e 2, o resultado somará com o
parâmetro 3. E o resultado novamente será somado com o
parâmetro 4*/

const soma = function(a,b){
    return a+b
}
soma(2,3)

const somaTetra = function(a,b,c,d){
    let result = (soma(a,b));
}

