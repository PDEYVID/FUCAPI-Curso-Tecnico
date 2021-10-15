
let nomes = ['Paulo', 'Maria', 'Deyvid']

nomes.forEach(function (x) {
    console.log(x)
})


const maiuscula = function (string) { // expressão de função
    // typeof verificar o tipo da string
    if (typeof (string) == 'string'){ // não vai ser igual a string por que o deu number 
        string = string.toUpperCase()
     console.log(string)
     }
}

nomes.forEach(maiuscula)

//console.log(nomes)

//nomes.forEach((nome) => console.log(nome.toUpperCase()))

//maiuscula("paulo deyvid barros do nascimento")
//maiuscula(1)