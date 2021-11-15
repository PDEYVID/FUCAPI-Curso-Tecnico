function adicionarServiço() {
    var btAdicionar = document.getElementById("btAdicionar");

    var produto = btAdicionar.value;

    if (produto == "") {
        alert("Informe o produto");
        btAdicionar.focus();
        return;
    }

    if (localStorage.getItem("inseriProduto")) {

        serviços = localStorage.getItem("inseriProduto").split(";");
        serviços.push(serviços);
        serviços.sort();

        localStorage.setItem("inseriProduto", serviços.join(";"));
    }
    else {
        localStorage.setItem("inseriProduto", serviços);
    }

    listarProduto();

    inProduto.value = "";
    inProduto.focus();
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarProduto);

function listarProduto() {
    var outCompras = document.getElementById("outCompras");

    if (!localStorage.getItem("inseriProduto")) {
        outCompras.textContent = "";
        return;
    }

    produtos = localStorage.getItem("inseriProduto").split(";");

    outCompras.textContent = "Produtos adicionados\n*************\n" + produtos.join("\n");
}


listarProduto();

function limparLista() {
    if (localStorage.getItem("inseriProduto")) {
        if (confirm("Você está excluindo este item da lista. Deseja continuar?")) {
            localStorage.removeItem("inseriProduto");
            listarProduto();
        }
    }
    else {
        alert("A sua lista está vázia");
    }

}

var btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparLista);

