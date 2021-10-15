


let produtos  = [
    {nome: 'Coca Cola', preco: 5},
    {nome: 'Pizza', preco: 15},
    {nome: 'KInder ovo', preco: 99}
]
//filtrando com funcao callback
let produtosBaratos = produtos.filter( function(produto){
    return produto.preco < 20;
})
console.log(produtosBaratos)

function filtrarBaratos(produto){
    return produto.preco < 6
}

let produtos2 = [
    {nome: 'baré', preco: 5.5},
    {nome: 'skol', preco: 4.0},
    {nome:'chocolate', preco: 10.0}
]

let produtos2Baratos;
// filtrando com função normal
produtos2Baratos = produtos2.filter( filtrarBaratos )

console.log(produtos2Baratos)
console.log(produtos2)
