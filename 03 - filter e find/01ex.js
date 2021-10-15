

let produtos =[
    {nome:'coca cola', preco: 5},
    {nome:'pizza', preco:15},
    {nome:'KInder ovo', preco: 99}
]

//filtrando com funcao de callback
let  produtosbaratos = produtos.filter( function(produto){
    return produto.preco < 20;
})

console.log(produtosbaratos)

function filtrabaratos(produto){

    return produto.preco < 6
}

let produtos2 = [
    {nome: 'baré', preco: 5.5},
    {nome: 'skol', preco: 4.0},
    {nome: 'chocolate', preco: 10.0}

]

let produtos2barats; 
//filtrando com função normal

protdutos2baratos = produtos2.filter(filtrabaratos)

console.log(produtos2barats)
console.log(produtos2)