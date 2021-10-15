
let listaFuncionarios = ['jose','ana','luiza']
let listaidades =[22,19,33]

function exibelista(lista, descricao){
    e=''
    for(let i=0 ; i<listaFuncionarios.length ; i++){
    e +='\n'+ descricao = lista[i]
    }
}
console.log(exibelista(listaFuncionarios, 'funcionarios: '))
console.log(exibelista(listaidades, 'idades:'))
return (exibelista)