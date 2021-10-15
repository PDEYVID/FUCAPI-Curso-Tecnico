


let nomes = ['maria','jose','joao']

nomes.forEach(function(x) {
    console.log()
})

const maiuscula = function(string){

    if(typeof(string) =='string'){
        string = string.toUpperCase()
        console.log(string)
    }
}

maiuscula("kleber")

nomes.forEach(maiuscula)

console.log(nomes)

// nomes.forEach( (nome) => console.log(nome.toUpperCase() ) )


///maiuscula("kaio")
//maiuscula(1)
