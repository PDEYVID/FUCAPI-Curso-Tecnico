var produtos = [
    {
        nome: "arroz",
        preco: 5.50
    },
    {
        nome: "farinha",
        preco: 10.0
    },
    {
        nome: "feijao",
        preco: 8.40
    }
]

function desconto(produto,perc){
    // produto deve estar na forma: { nome : " ", preco: 0.0 }
    // perc -> percentual de desconto: entre 
    produto = {
        nome : produto.nome,
        preco : produto.preco - produto.preco*perc
    }
    return produto;
}
let p1 = { nome:"feijao", preco:8.40 }
let p1ComDesconto = desconto(p1 ,0.15)
let p2 = desconto(p1, 0.5);
console.log(p1)
console.log(p1ComDesconto)
console.log(p2)

listaDesconto = produtos.map( function(produto) {
    return desconto(produto,0.1)
})
console.log(produtos)
console.log(listaDesconto)

