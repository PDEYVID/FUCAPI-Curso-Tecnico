function adicionarProduto() {
    var inProduto = document.getElementById("inProduto");

    var produto = inProduto.value;

    if (produto == "") {
        alert("Informe o produto");
        inProduto.focus();
        return;
    }

    if (localStorage.getItem("comprasProduto")) {

        produtos = localStorage.getItem("comprasProduto").split(";");
        produtos.push(produto);
        produtos.sort();

        localStorage.setItem("comprasProduto", produtos.join(";"));
    }
    else {
        localStorage.setItem("comprasProduto", produto);
    }

    listarProduto();

    inProduto.value = "";
    inProduto.focus();
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarProduto);

function listarProduto() {
    var outCompras = document.getElementById("outCompras");

    if (!localStorage.getItem("comprasProduto")) {
        outCompras.textContent = "";
        return;
    }

    produtos = localStorage.getItem("comprasProduto").split(";");

    outCompras.textContent = "Produtos adicionados\n*************\n" + produtos.join("\n");
}


listarProduto();

function limparLista() {
    if (localStorage.getItem("comprasProduto")) {
        if (confirm("Você está excluindo este item da lista. Deseja continuar?")) {
            localStorage.removeItem("comprasProduto");
            listarProduto();
        }
    }
    else {
        alert("A sua lista está vázia");
    }

}

var btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparLista);

