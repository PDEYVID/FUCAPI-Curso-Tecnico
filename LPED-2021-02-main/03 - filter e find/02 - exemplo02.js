


let alunos  = [
    {nome: 'josé',idade:18},
    {nome: 'joao',idade:16},
    {nome: 'maria',idade:21},
    {nome:'joao',idade:25}
]
let aluno = alunos.find(  function( aluno){
    return aluno.nome === 'joao';
})

console.log(alunos)

console.log(aluno)

//filtrar os nomes que começa com j

let nomesJ = alunos.filter(function(aluno){
    if(aluno.nome.charAt(0) === 'j'){
        return true
    }
})

console.log(nomesJ)